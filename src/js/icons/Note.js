import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Note = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Note' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M1 23h15l7-7V1H1v22zm14 0v-8h8' />
    </StyledIcon>
  );
});
