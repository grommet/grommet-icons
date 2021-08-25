import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FingerPrint = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FingerPrint" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeWidth="2" d="M14 15a2 2 0 1 0-2 2h0m0 3a5 5 0 1 1 5-5 1.5 1.5 0 0 0 3 0 8 8 0 1 0-8 8h2M1 15c0 2.672.953 5.122 2.537 7.027M20.52 8.042A10.978 10.978 0 0 0 12 4a10.977 10.977 0 0 0-8.464 3.974m14.99-5.363A13.939 13.939 0 0 0 12 1a13.94 13.94 0 0 0-6.481 1.587" />
  </StyledIcon>
));

FingerPrint.displayName = 'FingerPrint';

export { FingerPrint };
