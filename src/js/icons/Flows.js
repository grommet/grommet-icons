import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Flows = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Flows' {...props}>
      <path fillRule='evenodd' clipRule='evenodd' d='M5 2a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5zM4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5zm1 8a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3H5zm-1 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3z' fill='#000' />
    </StyledIcon>
  );
});
