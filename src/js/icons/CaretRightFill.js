import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const CaretRightFill = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='CaretRightFill' {...props}>
      <path d='M9 6v12l6-6z' fill='#000' />
    </StyledIcon>
  );
});
