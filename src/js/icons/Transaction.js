import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Transaction = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Transaction' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M2 7h18m-4-5 5 5-5 5m6 5H4m4-5-5 5 5 5' />
    </StyledIcon>
  );
});
