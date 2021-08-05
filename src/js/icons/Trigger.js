import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Trigger = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Trigger' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M4 14h6l-3 9h2L20 9h-6l4-8H7z' />
    </StyledIcon>
  );
});
