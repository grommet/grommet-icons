import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Money = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Money" {...props}>
    <path
      fill="none"
      strokeWidth="2"
      d="M16 16c0-1.105-3.134-2-7-2s-7 .895-7 2 3.134 2 7 2 7-.895 7-2zM2 16v4.937C2 22.077 5.134 23 9 23s7-.924 7-2.063V16M9 5c-4.418 0-8 .895-8 2s3.582 2 8 2M1 7v5c0 1.013 3.582 2 8 2M23 4c0-1.105-3.1-2-6.923-2-3.824 0-6.923.895-6.923 2s3.1 2 6.923 2S23 5.105 23 4zm-7 12c3.824 0 7-.987 7-2V4M9.154 4v10.166M9 9c0 1.013 3.253 2 7.077 2C19.9 11 23 10.013 23 9"
    />
  </StyledIcon>
));

Money.displayName = 'Money';

export { Money };
