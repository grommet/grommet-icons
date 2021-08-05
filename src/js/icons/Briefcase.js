import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Briefcase = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Briefcase' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M1 6h22v15H1V6zm5 0v15M18 6v15M8 6V3h8v3' />
    </StyledIcon>
  );
});
