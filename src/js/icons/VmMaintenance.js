import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const VmMaintenance = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="VmMaintenance" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M19 10V2H7v12h7V7H2v12h8m4 4 6-6m1-3a2 2 0 1 0 2 2" />
  </StyledIcon>
));

VmMaintenance.displayName = 'VmMaintenance';

export { VmMaintenance };
