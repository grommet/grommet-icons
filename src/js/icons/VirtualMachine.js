import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const VirtualMachine = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='VirtualMachine' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M1 23h13V10H1v13zm9-4h13V6H10v13zm-5-5h13V1H5v13z' />
    </StyledIcon>
  );
});
