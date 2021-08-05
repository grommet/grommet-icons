import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Add = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Add' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M12 22V2M2 12h20' />
    </StyledIcon>
  );
});
