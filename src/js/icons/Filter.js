import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Filter = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Filter' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m3 6 7 7v8h4v-8l7-7V3H3z' />
    </StyledIcon>
  );
});
