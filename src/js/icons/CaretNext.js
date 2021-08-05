import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const CaretNext = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='CaretNext' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m6 2 12 10L6 22z' />
    </StyledIcon>
  );
});
