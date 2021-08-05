import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const DocumentTxt = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='DocumentTxt' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M2 12h5m-2.5 0v7M16 12h5m-2.5 0v7m-4-7.5-6 7m0-7 6 7' />
    </StyledIcon>
  );
});
