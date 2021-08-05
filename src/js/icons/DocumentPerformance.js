import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const DocumentPerformance = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='DocumentPerformance' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M3 19l5-5 4 4 6.5-6.5M19 17v-6h-6' />
    </StyledIcon>
  );
});
