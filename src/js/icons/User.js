import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const User = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="User" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M8 24v-5m8 5v-5M3 24v-5c0-4.97 4.03-8 9-8s9 3.03 9 8v5m-9-13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
  </StyledIcon>
));

User.displayName = 'User';

export { User };
