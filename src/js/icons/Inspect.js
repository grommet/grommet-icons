import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Inspect = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Inspect" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M5.5 21a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zM1 16V6.5A4.5 4.5 0 0 1 5.5 2H6m17 14V6.5A4.5 4.5 0 0 0 18.5 2H18m.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zM10 17s0-2 2-2 2 2 2 2" />
  </StyledIcon>
));

Inspect.displayName = 'Inspect';

export { Inspect };
