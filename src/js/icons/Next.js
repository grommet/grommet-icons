import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Next = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Next' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m7 2 10 10L7 22' />
    </StyledIcon>
  );
});
