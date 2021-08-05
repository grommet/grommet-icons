import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Folder = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Folder' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M2 10V2h8l3 4h9v4H2zm0 0h20v12H2V10z' />
    </StyledIcon>
  );
});
