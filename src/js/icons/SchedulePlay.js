import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const SchedulePlay = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="SchedulePlay" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M14 0v3M1 7h18M6 0v3m-2 8h2m2 0h8M4 15h2m2 0h6m-1 4H1V3h18v10m-1 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm-.5-6 1.5 1-1.5 1v-2z" />
  </StyledIcon>
));

SchedulePlay.displayName = 'SchedulePlay';

export { SchedulePlay };
