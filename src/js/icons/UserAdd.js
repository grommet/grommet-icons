import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const UserAdd = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="UserAdd" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M5 24v-5m6 5v-5M1 24v-6c0-4.97 3.134-7 7-7s7 2 7 7v6M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10zm8 0h8m-4-4v8" />
  </StyledIcon>
));

UserAdd.displayName = 'UserAdd';

export { UserAdd };
