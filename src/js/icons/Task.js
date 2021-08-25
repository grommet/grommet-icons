import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Task = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Task" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 20h12m-12-8h12M12 4h12M1 19l3 3 5-5m-8-6 3 3 5-5m0-8L4 6 1 3" />
  </StyledIcon>
));

Task.displayName = 'Task';

export { Task };
