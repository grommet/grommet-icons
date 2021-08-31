import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ScheduleNew = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ScheduleNew" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M14 0v3M1 7h18M6 0v3m-2 8h2m2 0h8M4 15h2m2 0h6m-2 4H1V3h18v10m0 2v9m-4-7 8 5m0-5-8 5" />
  </StyledIcon>
));

ScheduleNew.displayName = 'ScheduleNew';

export { ScheduleNew };
