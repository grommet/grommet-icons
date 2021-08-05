import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Waypoint = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Waypoint' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m3 11 8 2 2 8 8-18z' />
    </StyledIcon>
  );
});
