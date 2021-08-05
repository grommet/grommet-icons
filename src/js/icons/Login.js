import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Login = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Login' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M9 15v7h13V2H9v7m9 3H0m13-5 5 5-5 5' />
    </StyledIcon>
  );
});
