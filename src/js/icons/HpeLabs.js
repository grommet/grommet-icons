import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const HpeLabs = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='HpeLabs' {...props}>
      <path fill='none' stroke='#01A982' strokeWidth='2' d='M14 23H5V2h12v13h-4V6H9v13h11' />
    </StyledIcon>
  );
});
