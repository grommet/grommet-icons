import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Atm = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Atm" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4 10H1V6h22v4h-3M6 6h12v14.006A2.003 2.003 0 0 1 15.991 22H8.01A2.002 2.002 0 0 1 6 20.006V6zm7 12h3m-3-3h3m-3-3h3m-6 10V6M3 2h3m2 0h3m2 0h3m2 0h3" />
  </StyledIcon>
));

Atm.displayName = 'Atm';

export { Atm };
