import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Impact = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Impact' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m13 2 9 4v11l-9 5V2zm9 4-9 5 9-5zM9 22V2v20zm0-10L3 5l6 7zm0 0H1h8zm0 0-6 7 6-7z' />
    </StyledIcon>
  );
});
