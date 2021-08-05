import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const CaretDownFill = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='CaretDownFill' {...props}>
      <path d='M18 9H6l6 6 6-6z' fill='#000' />
    </StyledIcon>
  );
});
