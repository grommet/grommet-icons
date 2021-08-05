import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Cube = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Cube' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m12 2 10 5v10l-10 5-10-5V7l10-5zM2 7l10 5 10-5m-10 5v10-10z' />
    </StyledIcon>
  );
});
