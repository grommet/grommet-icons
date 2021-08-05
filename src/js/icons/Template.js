import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Template = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Template' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M1 3h22v18H1V3zm0 5h22M7 8v13' />
    </StyledIcon>
  );
});
