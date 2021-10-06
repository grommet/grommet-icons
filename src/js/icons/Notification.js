import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Notification = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Notification" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4 19V9a8 8 0 0 1 16 0v10M1 19h22m-8 0v1a3 3 0 1 1-6 0v-1" />
  </StyledIcon>
));

Notification.displayName = 'Notification';

export { Notification };
