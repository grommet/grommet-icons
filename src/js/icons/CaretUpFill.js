import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const CaretUpFill = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='CaretUpFill' {...props}>
      <path d='M6 15h12l-6-6-6 6z' fill='#000' />
    </StyledIcon>
  );
});
