import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const FormSubtract = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='FormSubtract' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M6 12h12' />
    </StyledIcon>
  );
});
