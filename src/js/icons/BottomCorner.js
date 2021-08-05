import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const BottomCorner = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='BottomCorner' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M8 20h12V8' />
    </StyledIcon>
  );
});
