import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Time = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Time' {...props}>
      <path d='M1 13h4l2.5-9 5 16.5L17 9l2 4h4' stroke='#000' strokeWidth='2' />
    </StyledIcon>
  );
});
