import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Logout = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Logout' {...props}>
      <path fill='none' stroke='#231F20' strokeWidth='2' d='M13 9V2H1v20h12v-7m9-3H5m12-5 5 5-5 5' />
    </StyledIcon>
  );
});
