import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const StatusUnknownSmall = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 12 12' a11yTitle='StatusUnknownSmall' {...props}>
      <rect width='10' height='10' x='1' y='1' fillRule='evenodd' stroke='#000' rx='1' />
    </StyledIcon>
  );
});
