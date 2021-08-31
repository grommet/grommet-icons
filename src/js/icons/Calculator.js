import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Calculator = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Calculator" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M22 23H2V1h20v22zm-6-6h2v2h-2v-2zm-5 0h2v2h-2v-2zm5-5h2v2h-2v-2zm-5 0h2v2h-2v-2zm-5 5h2v2H6v-2zm0-5h2v2H6v-2zm12-3H6V5h12v4z" />
  </StyledIcon>
));

Calculator.displayName = 'Calculator';

export { Calculator };
