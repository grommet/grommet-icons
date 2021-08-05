import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Home = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Home' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m1 11 11-9 11 9m-8 12v-8H9v8m-5 0V9m16 14V9' />
    </StyledIcon>
  );
});
