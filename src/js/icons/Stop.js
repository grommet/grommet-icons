import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Stop = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Stop' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M4 4h16v16H4z' />
    </StyledIcon>
  );
});
