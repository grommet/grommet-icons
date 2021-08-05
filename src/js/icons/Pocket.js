import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Pocket = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Pocket' {...props}>
      <g fill='none' fillRule='evenodd'><path fill='#F50057' d='M12 2H2a2 2 0 0 0-2 2v8c0 5.982 6 11 12 11s12-5.018 12-11V4a2 2 0 0 0-2-2H12z' /><path stroke='#FFF' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='m6 9 6.404 6L18 9' /></g>
    </StyledIcon>
  );
});
