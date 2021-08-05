import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Tasks = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Tasks' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M1 3h22v4H1V3zm0 7h22v4H1v-4zm0 7h22v4H1v-4zM1 4h15v2H1V4zm0 7h5v2H1v-2zm0 7h10v2H1v-2z' />
    </StyledIcon>
  );
});
