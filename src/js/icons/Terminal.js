import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Terminal = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Terminal' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m2 5 6 6-6 6m7 0h14' />
    </StyledIcon>
  );
});
