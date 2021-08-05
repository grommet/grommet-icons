import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const FastForward = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='FastForward' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M9 2.059V8L1 2.059v20L9 16v6.059l13-10z' />
    </StyledIcon>
  );
});
