import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Server = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Server" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M14 19h1v-1h-1v1zm-9 4h14V1H5v22zM8 5h8-8zm0 4h8-8zm0 4h8-8z" />
  </StyledIcon>
));

Server.displayName = 'Server';

export { Server };
