import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const FormAdd = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='FormAdd' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M12 18V6m-6 6h12' />
    </StyledIcon>
  );
});
