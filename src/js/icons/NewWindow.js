import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const NewWindow = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='NewWindow' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M11 9h8m-4 4V5m2 12v6H1V7h6m0-6h16v16H7V1z' />
    </StyledIcon>
  );
});
