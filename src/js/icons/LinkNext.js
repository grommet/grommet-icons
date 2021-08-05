import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const LinkNext = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='LinkNext' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M2 12h20m-9-9 9 9-9 9' />
    </StyledIcon>
  );
});
