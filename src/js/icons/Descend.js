import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Descend = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Descend' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m2 16 6 6 6-6M11 3h11M11 7h8m-8 4h5M8 22V2' />
    </StyledIcon>
  );
});
