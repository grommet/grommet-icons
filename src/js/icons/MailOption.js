import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const MailOption = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='MailOption' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M1 4h22v16H1V4zm0 1 11 8.5L23 5' />
    </StyledIcon>
  );
});
