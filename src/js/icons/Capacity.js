import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Capacity = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Capacity' {...props}>
      <path fill='none' stroke='#000' strokeLinecap='round' strokeWidth='2' d='M1 19h22V5H1v14zm3-3h3V8H4v8zm6 0h3V8h-3v8z' />
    </StyledIcon>
  );
});
