import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const BarChart = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='BarChart' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M0 22h24M22 2h-4v16h4V2zM6 6H2v12h4V6zm8 12h-4v-8h4v8z' />
    </StyledIcon>
  );
});
