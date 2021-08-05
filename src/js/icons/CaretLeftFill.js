import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const CaretLeftFill = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='CaretLeftFill' {...props}>
      <path d='M15 18V6l-6 6z' fill='#000' />
    </StyledIcon>
  );
});
