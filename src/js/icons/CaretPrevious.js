import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const CaretPrevious = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='CaretPrevious' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M18 2 6 12l12 10z' />
    </StyledIcon>
  );
});
