import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Bus = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Bus" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="M3 12h18v8H3v-8zm0-8c0-1.105.893-2 1.995-2h14.01C20.107 2 21 2.887 21 4v8H3V4zm0 16h3v2.001a.996.996 0 0 1-.999.999H3.999A.996.996 0 0 1 3 22.001V20zm15 0h3v2.001a.996.996 0 0 1-.999.999h-1.002a.996.996 0 0 1-.999-.999V20zM7 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 6v6M1 5v8m22-8v8m-13 3h4M3 6h18"
    />
  </StyledIcon>
));

Bus.displayName = 'Bus';

export { Bus };
