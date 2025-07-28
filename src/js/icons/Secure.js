import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Secure = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Secure" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="M7 11V6c0-3 2-5 5-5s5 2 5 5v5m-5 12a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-8v4m0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
    />
  </StyledIcon>
));

Secure.displayName = 'Secure';

export { Secure };
