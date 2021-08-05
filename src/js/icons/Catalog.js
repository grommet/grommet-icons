import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Catalog = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Catalog' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M5 6 1 4.5v13.943L12 23l11-4.557V4l-4 2M5 16V2l7 3 7-3v14l-7 3-7-3zm6.95-11v14' />
    </StyledIcon>
  );
});
