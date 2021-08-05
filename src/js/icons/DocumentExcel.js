import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const DocumentExcel = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='DocumentExcel' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M9.25 12l-2 3.25-2-3.25H5l2.25 3.5-2.5 3.5H5l2.25-3.25L9.5 19h.25l-2.5-3.5L9.5 12h-.25z' />
    </StyledIcon>
  );
});
