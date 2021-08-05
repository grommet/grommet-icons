import { useEffect, useRef, useLayoutEffect } from 'react';

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

const updateRef = (ref, innerRef) => {
  if (!ref) return;
  if (typeof ref === 'function') {
    ref(innerRef.current);
  } else {
    // eslint-disable-next-line no-param-reassign
    ref.current = innerRef.current;
  }
};

export const useForwardedRef = (ref) => {
  const innerRef = useRef(null);
  updateRef(ref, innerRef);
  useLayoutEffect(() => updateRef(ref, innerRef));
  useEffect(() => updateRef(ref, innerRef));
  return innerRef;
};

export default { deepMerge, isObject, useForwardedRef };
