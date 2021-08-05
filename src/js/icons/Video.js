import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Video = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Video' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m15 9 8-4v14l-8-4V9zM1 5h14v14H1V5z' />
    </StyledIcon>
  );
});
