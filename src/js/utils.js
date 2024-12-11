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

const calculatePad = (value, iconDimension) =>
  `${(value - iconDimension) / 2}px`;

// iconPad applies padding to icon to ensure it aligns
// with text line-height or desired width
export function iconPad(props) {
  const { height, size = 'medium', width } = props;
  const theme = useContext(ThemeContext);
  const iconDimension = parseMetricToNum(theme?.icon?.size?.[size] || size);

  let style = '';
  if (height && theme?.text?.[height]?.height) {
    const unit = theme.text[height].height.match(/[a-z]+$/)?.[0] || 'px';
    const lineHeight =
      parseMetricToNum(theme.text[height].height) * (unit === 'rem' ? 16 : 1);

    if (lineHeight > iconDimension) {
      const pad = calculatePad(lineHeight, iconDimension);
      style += `padding-top: ${pad}; padding-bottom: ${pad};`;
    }
  }

  if (width && theme?.text?.[width]?.height) {
    const desiredWidth = parseMetricToNum(theme.text[width].height);

    if (desiredWidth > iconDimension) {
      const pad = calculatePad(desiredWidth, iconDimension);
      style += `padding-left: ${pad}; padding-right: ${pad};`;
    }
  }

  return style;
}

// ensure icons that rely on urls don't have id collision
// Date.now + Math.random is unique enough for icon use cases
export const generatePrefix = (name) =>
  `_grommeticons-${name}-${
    // don't include time-based/random id generation in snapshot tests to avoid
    // needing to update snapshots with every commit
    process.env.NODE_ENV !== 'test' ? Date.now() + Math.random() : ''
  }`;

export default {
  deepMerge,
  isObject,
  parseMetricToNum,
  iconPad,
  useScaleProps,
};
