import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Erase = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Erase' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M7 21 22 6l-4-4L2 18l3 3h14M6 14l4 4' />
    </StyledIcon>
  );
});
