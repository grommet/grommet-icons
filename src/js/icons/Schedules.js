import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Schedules = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Schedules" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M17 7h6v16H7v-4m16-8h-6M13 0v3M1 7h16M1 3h16v16H1V3zm4-3v3m-1 8h2m2 0h6M4 15h2m2 0h6" />
  </StyledIcon>
));

Schedules.displayName = 'Schedules';

export { Schedules };
