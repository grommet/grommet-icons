import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const More = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='More' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M3 13v-2h2v2H3zm8 0v-2h2v2h-2zm8 0v-2h2v2h-2z' />
    </StyledIcon>
  );
});
