import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Multiple = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Multiple' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M19 15h4V1H9v4m6 14h4V5H5v4M1 23h14V9H1v14z' />
    </StyledIcon>
  );
});
