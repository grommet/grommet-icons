import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const VolumeMute = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='VolumeMute' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M1 8v8h5.099L12 21V3L6 8H1zm14 1 6 6m0-6-6 6' />
    </StyledIcon>
  );
});
