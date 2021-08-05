import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const ShareOption = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='ShareOption' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-2-4-8-5m8-7-8 5' />
    </StyledIcon>
  );
});
