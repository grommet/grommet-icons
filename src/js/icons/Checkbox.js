import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Checkbox = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Checkbox' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M2 2h20v20H2z' />
    </StyledIcon>
  );
});
