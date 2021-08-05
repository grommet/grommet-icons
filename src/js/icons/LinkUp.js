import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const LinkUp = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='LinkUp' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M12 2v20M3 11l9-9 9 9' />
    </StyledIcon>
  );
});
