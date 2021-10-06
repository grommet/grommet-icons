import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const UserNew = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="UserNew" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M18 24V12m5 10-10-7m10 0-10 7M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10zm5.023 2.023C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h10" />
  </StyledIcon>
));

UserNew.displayName = 'UserNew';

export { UserNew };
