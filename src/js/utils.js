import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

export function deepMerge(target, ...sources) {
  if (!sources.length) {
    return target;
  }
  // making sure to not change target (immutable)
  const output = { ...target };
  sources.forEach((source) => {
    if (isObject(source)) {
      Object.keys(source).forEach((key) => {
        if (isObject(source[key])) {
          if (!output[key]) {
            output[key] = { ...source[key] };
          } else {
            output[key] = deepMerge(output[key], source[key]);
          }
        } else {
          output[key] = source[key];
        }
      });
    }
  });
  return output;
}

export const parseMetricToNum = (string = '') =>
  parseFloat(string.match(/\d+(\.\d+)?/), 10);

// scaleProps sets path properties to prevent scaling the stroke
// when the theme doesn't want it for small sizes.
export function useScaleProps(props) {
  const theme = useContext(ThemeContext);
  const { size } = props;
  const result = {};
  if (theme?.icon?.disableScaleDown) {
    const dimension = parseMetricToNum(theme.icon.size[size] || size);
    if (dimension < 24) result.vectorEffect = 'non-scaling-stroke';
  }
  return result;
}

// iconPad applies top/bottom padding to icon to ensure it aligns
// with text line-height
export function useIconPad({ size = 'medium' }) {
  const { size = 'medium' } = props;
  const theme = useContext(ThemeContext);

  let style = '';
  if (theme?.icon?.height?.[size]) {
    const dimension = parseMetricToNum(theme.icon.size[size] || size);
    const height = parseMetricToNum(theme.icon.height[size]);

    if (height > dimension) {
      const pad = `${(height - dimension) / 2}px`;
      style += `padding-top: ${pad}; padding-bottom: ${pad};`;
    }
  }

  return style;
}

export default {
  deepMerge,
  isObject,
  parseMetricToNum,
  useIconPad,
  useScaleProps,
};
