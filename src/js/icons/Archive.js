import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Archive = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Archive' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M3 23h18V6H3v17zm6-9h6v-4H9v4zM1 6h22V1H1v5z' />
    </StyledIcon>
  );
});
