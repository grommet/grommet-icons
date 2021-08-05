import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Desktop = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Desktop' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M1 1h22v18H1V1zm4 22h14H5zm5-4v4-4zm4 0v4-4z' />
    </StyledIcon>
  );
});
