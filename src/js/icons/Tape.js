import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Tape = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Tape' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M2 2h20v20H2V2zm17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm-7-3c-1.655 0-3 1.345-3 3s1.345 3 3 3 3-1.345 3-3-1.345-3-3-3z' />
    </StyledIcon>
  );
});
