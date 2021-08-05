import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Menu = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Menu' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M2 19h20M2 5h20M2 12h20' />
    </StyledIcon>
  );
});
