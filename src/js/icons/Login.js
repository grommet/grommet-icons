import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Login = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Login" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M9 15v7h13V2H9v7m9 3H0m13-5 5 5-5 5" />
  </StyledIcon>
));

Login.displayName = 'Login';

export { Login };
