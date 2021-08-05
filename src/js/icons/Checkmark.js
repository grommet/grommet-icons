import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Checkmark = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Checkmark' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m2 14 7 6L22 4' />
    </StyledIcon>
  );
});
