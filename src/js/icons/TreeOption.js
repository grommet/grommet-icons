import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const TreeOption = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='TreeOption' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m7 13 4.375-7H9l3-4 3 4h-2.375L17 13h-2l4 6.667H5L9 13H7zm5 11v-4' />
    </StyledIcon>
  );
});
