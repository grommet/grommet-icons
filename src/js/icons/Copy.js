import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Copy = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Copy' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M9 15h8-8zm0-4h10H9zm0-4h4-4zm7-6v6h6M6 5H2v18h16v-4m4 0H6V1h11l5 5v13z' />
    </StyledIcon>
  );
});
