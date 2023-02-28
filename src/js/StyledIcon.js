import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { colorStyle } from 'grommet-styles';

import { defaultProps } from './default-props';
import { parseMetricToNum, useIconPad } from './utils';

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

const StyledIcon = styled(IconInner)`
  display: inline-block;
  flex: 0 0 auto;

  ${({ size = 'medium', theme, viewBox }) => {
    const [, , w, h] = (viewBox || '0 0 24 24').split(' ');
    const scale = w / h;
    const dimension = parseMetricToNum(theme.icon.size[size] || size);

    if (w < h) {
      return `
      width: ${dimension}px;
      height: ${dimension / scale}px;
    `;
    }
    if (h < w) {
      return `
      width: ${dimension * scale}px;
      height: ${dimension}px;
    `;
    }
    return `
      width: ${dimension}px;
      height: ${dimension}px;
    `;
  }}
  ${({ color }) => color !== 'plain' && colorCss}
  ${(props) => useIconPad(props)}
  ${({ theme }) => theme && theme.icon.extend}
`;

StyledIcon.defaultProps = {};
Object.setPrototypeOf(StyledIcon.defaultProps, defaultProps);

export { StyledIcon };
