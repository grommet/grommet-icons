import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const FolderOpen = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='FolderOpen' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M5 2h6l2 4h6v4H5V2zm-3 8h20l-3 12H5L2 10z' />
    </StyledIcon>
  );
});
