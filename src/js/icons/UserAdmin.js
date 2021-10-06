import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const UserAdmin = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="UserAdmin" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10zm5.023 2.023C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h7m2-3.5a2.5 2.5 0 1 0 5.002-.002A2.5 2.5 0 0 0 10 19.5zM23 15l-3-3-6 6m3.5-3.5 3 3-3-3z" />
  </StyledIcon>
));

UserAdmin.displayName = 'UserAdmin';

export { UserAdmin };
