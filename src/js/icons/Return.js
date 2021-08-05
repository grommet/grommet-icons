import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Return = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Return' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m9 19-5-5 5-5m9-5v10H5' />
    </StyledIcon>
  );
});
