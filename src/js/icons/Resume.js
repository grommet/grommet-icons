import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Resume = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Resume' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M1 20h5V4H1v16zm10-1 11-7-11-7v14z' />
    </StyledIcon>
  );
});
