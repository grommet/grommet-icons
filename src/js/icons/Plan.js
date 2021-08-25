import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Plan = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Plan" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M18 4V0v4zM7 18H5h2zm12 0H9h10zM7 14H5h2zm12 0H9h10zM6 4V0v4zM1 9h22H1zm0 14h22V4H1v19z" />
  </StyledIcon>
));

Plan.displayName = 'Plan';

export { Plan };
