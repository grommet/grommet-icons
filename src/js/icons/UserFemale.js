import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const UserFemale = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="UserFemale" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M20 24v-5c0-4-4.06-5-5-5 3.948 0 5-2 5-2s-3.057-1.969-3-6c-.057-3-2.15-5-5-5-2.988 0-5.081 2-5 5-.081 3.969-3 6-3 6s.914 2 5 2c-1.079 0-5 1-5 5v5m12-5v5m-8-5v5" />
  </StyledIcon>
));

UserFemale.displayName = 'UserFemale';

export { UserFemale };
