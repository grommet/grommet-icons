import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Optimize = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Optimize' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M2 22h4v-4H2v4zM22 2 12 12m10-2V2h-8m8 11h-4v9h4v-9zm-12 9h4v-6h-4v6z' />
    </StyledIcon>
  );
});
