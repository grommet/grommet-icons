import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const ChatOption = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='ChatOption' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M9 7V1h14v10h-3v5l-5-4M1 7h14v11H9l-5 4v-4H1V7z' />
    </StyledIcon>
  );
});
