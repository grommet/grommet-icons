import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const InProgress = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="InProgress" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 1h22M10 4.5h4V6c0 1-2 2-2 2s-2-1-2-2V4.5zM5 1v5c0 3 5 3.235 5 6s-5 3-5 6v5M19 1v5c0 3-5 3.235-5 6s5 3 5 6v5M1 23h22M8 21c0-2 4-4 4-4s4 2 4 4v2H8v-2z" />
  </StyledIcon>
));

InProgress.displayName = 'InProgress';

export { InProgress };
