import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const StatusGoodSmall = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 12 12' a11yTitle='StatusGoodSmall' {...props}>
      <circle cx='6' cy='6' r='5' fillRule='evenodd' stroke='#000' />
    </StyledIcon>
  );
});
