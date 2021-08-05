import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const MoreVertical = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='MoreVertical' {...props}>
      <path d='M14 14h-4v-4h4v4zm0-7h-4V3h4v4zm0 14h-4v-4h4v4z' />
    </StyledIcon>
  );
});
