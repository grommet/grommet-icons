import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Transaction = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Transaction" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2 7h18m-4-5 5 5-5 5m6 5H4m4-5-5 5 5 5" />
  </StyledIcon>
));

Transaction.displayName = 'Transaction';

export { Transaction };
