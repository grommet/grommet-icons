import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Servers = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Servers" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M7 19h1v-1H7v1zm11 0h1v-1h-1v1zM1 23h11V1H1v22zm11 0h11V1H12v22zM4 5h5-5zm11 0h5-5zM4 9h5-5zm11 0h5-5zM4 13h5-5zm11 0h5-5z" />
  </StyledIcon>
));

Servers.displayName = 'Servers';

export { Servers };
