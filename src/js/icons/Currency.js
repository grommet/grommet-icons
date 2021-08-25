import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Currency = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Currency" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 5h22v14H1V5zm1 4a3 3 0 0 0 3-3m-3 9a3 3 0 0 1 3 3m17-9a3 3 0 0 1-3-3m3 9a3 3 0 0 0-3 3m-7-2c1.657 0 3-1.79 3-4s-1.343-4-3-4-3 1.79-3 4 1.343 4 3 4z" />
  </StyledIcon>
));

Currency.displayName = 'Currency';

export { Currency };
