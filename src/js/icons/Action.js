import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Action = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Action" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m1 23 3-3-3 3zM20 4l3-3-3 3zM9 11l3-3-3 3zm4 4 3-3-3 3zM10 5l9 9 1-1c2-2 4.053-5 0-9s-7-2-9 0l-1 1zm-6 6 1-1 9 9-1 1c-2 2-5 4.087-9 0s-2-7 0-9z" />
  </StyledIcon>
));

Action.displayName = 'Action';

export { Action };
