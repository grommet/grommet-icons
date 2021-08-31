import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Contract = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Contract" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2 14h8v8m-9 1 9-9M23 1l-9 9m8 0h-8V2" />
  </StyledIcon>
));

Contract.displayName = 'Contract';

export { Contract };
