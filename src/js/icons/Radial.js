import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Radial = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Radial' {...props}>
      <circle cx='12' cy='12' r='11' fill='none' stroke='#000' strokeWidth='2' />
    </StyledIcon>
  );
});
