import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const FormPrevious = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='FormPrevious' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m15 6-6 6 6 6' />
    </StyledIcon>
  );
});
