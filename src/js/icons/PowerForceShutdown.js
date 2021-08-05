import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const PowerForceShutdown = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='PowerForceShutdown' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-13v8' />
    </StyledIcon>
  );
});
