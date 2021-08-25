import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Services = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Services" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-6V0m0 12V9M0 6h3m6 0h3M2 2l2 2m4 4 2 2m0-8L8 4M4 8l-2 2m16 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-6V3m0 12v-3m-6-3h3m6 0h3M14 5l2 2m4 4 2 2m0-8-2 2m-4 4-2 2m-5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-6v-3m0 12v-3m-6-3h3m6 0h3M5 14l2 2m4 4 2 2m0-8-2 2m-4 4-2 2" />
  </StyledIcon>
));

Services.displayName = 'Services';

export { Services };
