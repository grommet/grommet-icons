import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Bluetooth = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Bluetooth' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m7 7 10 9-5 4V4l5 4-10 8' />
    </StyledIcon>
  );
});
