import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const StatusWarningSmall = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 12 12' a11yTitle='StatusWarningSmall' {...props}>
      <path fillRule='evenodd' stroke='#000' strokeLinejoin='round' d='m6 1 5 9H1z' />
    </StyledIcon>
  );
});
