import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Save = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Save' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M3 2v19h18V3h-9v11m-4-3 4 4 4-4' />
    </StyledIcon>
  );
});
