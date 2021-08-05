import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const HomeOption = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='HomeOption' {...props}>
      <rect x='3' y='3' width='18' height='18' rx='4' stroke='#000' strokeWidth='2' />
    </StyledIcon>
  );
});
