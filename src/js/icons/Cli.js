import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Cli = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Cli' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M1 1h22v22H1V1zm0 4h22M5 1v4m6 11h8M5 10l3 3-3 3' />
    </StyledIcon>
  );
});
