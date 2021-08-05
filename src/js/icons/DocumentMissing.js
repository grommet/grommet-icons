import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const DocumentMissing = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='DocumentMissing' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M2.998 1H17.5L21 4.5V23H3L2.998 1zM16 1v5h5M9 12l6 6m0-6-6 6' />
    </StyledIcon>
  );
});
