import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Restroom = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Restroom" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeWidth="2" d="M6 11h12M6 3h12m-6 13a5 5 0 0 0 5-5H7a5 5 0 0 0 5 5zM7 3h10v8H7V3zm0 3h2.5m5 9.5 1.5 6H8l1.5-6" />
  </StyledIcon>
));

Restroom.displayName = 'Restroom';

export { Restroom };
