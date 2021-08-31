import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const UserManager = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="UserManager" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M16 12c2.374 1.183 4 3.65 4 7v4H4v-4c0-3.354 1.631-5.825 4-7m4 1a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm6-6c-1.5 0-3 .36-5-2-2 2.36-4.5 3-7 2m1 6 5.025 5.257L17 13m-5 5v5" />
  </StyledIcon>
));

UserManager.displayName = 'UserManager';

export { UserManager };
