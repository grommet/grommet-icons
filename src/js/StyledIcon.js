import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { defaultProps } from './default-props';
import { iconPad, parseMetricToNum } from './utils';

// Returns the specific color that should be used according to the theme.
// If 'dark' is supplied, it takes precedence over 'theme.dark'.
// Can return undefined.
const normalizeColor = (color, theme, dark) => {
  const colorSpec =
    theme.global && theme.global.colors[color] !== undefined
      ? theme.global.colors[color]
      : color;
  // If the color has a light or dark object, use that
  let result = colorSpec;
  if (colorSpec) {
    if (
      (dark === true || (dark === undefined && theme.dark)) &&
      colorSpec.dark !== undefined
    ) {
      result = colorSpec.dark;
    } else if (
      (dark === false || !theme.dark) &&
      colorSpec.light !== undefined
    ) {
      result = colorSpec.light;
    }
  }
  // allow one level of indirection in color names
  if (result && theme.global && theme.global.colors[result] !== undefined) {
    result = normalizeColor(result, theme, dark);
  }

  return result;
};

const colorStyle = (name, value, theme, required) => css`
  ${name}: ${normalizeColor(value, theme, required)};
`;

const colorCss = css`
  ${(props) =>
    colorStyle(
      'fill',
      props.color || props.theme.global.colors.icon,
      props.theme,
    )}
  ${(props) =>
    colorStyle(
      'stroke',
      props.color || props.theme.global.colors.icon,
      props.theme,
    )}

  g {
    fill: inherit;
    stroke: inherit;
  }

  *:not([stroke]) {
    &[fill='none'] {
      stroke-width: 0;
    }
  }

  *[stroke*='#'],
  *[STROKE*='#'] {
    stroke: inherit;
    fill: none;
  }

  *[fill-rule],
  *[FILL-RULE],
  *[fill*='#'],
  *[FILL*='#'] {
    fill: inherit;
    stroke: none;
  }
`;

const IconInner = forwardRef(
  ({ a11yTitle, color, size, theme, ...rest }, ref) => (
    <svg ref={ref} aria-label={a11yTitle} {...rest} />
  ),
);
IconInner.displayName = 'Icon';

const StyledIcon = styled(IconInner).withConfig({
  // don't let height attribute leak to DOM
  // https://styled-components.com/docs/api#shouldforwardprop
  shouldForwardProp: (prop) => !['height', 'width'].includes(prop),
})`
  display: inline-block;
  flex: 0 0 auto;

  ${({ size: sizeProp = 'medium', theme, viewBox }) => {
    const [, , w, h] = (viewBox || '0 0 24 24').split(' ');
    const scale = w / h;
    const size = theme.icon.size[sizeProp] || sizeProp;
    const dimension = parseMetricToNum(size);
    // grab rem, em, px value from resolved size value
    const unit = size.match(/[a-z]+$/)?.[0] || 'px';

    if (w < h) {
      return `
      width: ${dimension}${unit};
      height: ${dimension / scale}${unit};
    `;
    }
    if (h < w) {
      return `
      width: ${dimension * scale}${unit};
      height: ${dimension}${unit};
    `;
    }
    return `
      width: ${dimension}${unit};
      height: ${dimension}${unit};
    `;
  }}
  ${({ color }) => color !== 'plain' && colorCss}
  ${(props) => (props.height || props.width) && iconPad(props)}
  ${({ theme }) => theme && theme.icon.extend}
`;

StyledIcon.defaultProps = {};
Object.setPrototypeOf(StyledIcon.defaultProps, defaultProps);

export { StyledIcon };
