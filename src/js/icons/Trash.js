import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Trash = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Trash' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M4 5h16v18H4V5zM1 5h22M9 1h6v4H9V1zm0 0h6v4H9V1zm6 8v10M9 9v10' />
    </StyledIcon>
  );
});
