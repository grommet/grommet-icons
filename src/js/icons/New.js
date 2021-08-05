import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const New = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='New' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M12 1v22M2 6l20 12m0-12L2 18' />
    </StyledIcon>
  );
});
