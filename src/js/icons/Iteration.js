import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Iteration = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Iteration' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M1 9v14h14M5 5v14h14M9 15h14V1H9v14z' />
    </StyledIcon>
  );
});
