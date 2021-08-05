import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Shift = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Shift' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M12 0v24M2 12h10m10 0H12M6 8l-4 4 4 4m12-8 4 4-4 4' />
    </StyledIcon>
  );
});
