import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Bookmark = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Bookmark' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M5 1v21l7-5 7 5V1z' />
    </StyledIcon>
  );
});
