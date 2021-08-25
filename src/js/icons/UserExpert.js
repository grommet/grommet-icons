import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const UserExpert = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="UserExpert" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10zm6.643 4.696a6.745 6.745 0 0 0-1.62-2.673C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h10m1-4.176L16.19 22 23 13" />
  </StyledIcon>
));

UserExpert.displayName = 'UserExpert';

export { UserExpert };
