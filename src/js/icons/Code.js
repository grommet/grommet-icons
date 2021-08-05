import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Code = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Code' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m9 22 6-20m2 15 5-5-5-5M7 17l-5-5 5-5' />
    </StyledIcon>
  );
});
