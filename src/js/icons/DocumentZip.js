import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const DocumentZip = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='DocumentZip' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M2 13h5v1l-4 4v1h5m3-7v8-8zm4 1v7-7zm5 2a2 2 0 0 0-2-2h-3v4h3a2 2 0 0 0 2-2z' />
    </StyledIcon>
  );
});
