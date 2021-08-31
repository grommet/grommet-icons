import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Troubleshoot = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Troubleshoot" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 5c0-2 1-4 2-4l2 4h2l2-4c1 0 2 2 2 4 0 2.254-1 4-3 5v11c0 1 0 2-2 2s-2-1-2-2V10C2 9 1 7.254 1 5zm18 7v6m-2 0 1 5h2l1-5h-4zm-3-6h10-10zm7 0V3a2 2 0 1 0-4 0v9" />
  </StyledIcon>
));

Troubleshoot.displayName = 'Troubleshoot';

export { Troubleshoot };
