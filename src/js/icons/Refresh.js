import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Refresh = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Refresh" {...props}>
    <path
      fill="none"
      strokeWidth="2"
      d="M20 8c-1.403-2.96-4.463-5-8-5a9 9 0 1 0 0 18 9 9 0 0 0 9-9m0-9v6h-6"
    />
  </StyledIcon>
));

Refresh.displayName = 'Refresh';

export { Refresh };
