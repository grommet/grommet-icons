import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Dxc = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Dxc" {...props}>
    <path fillRule="evenodd" d="m12 14 4 7H8l4-7zm0-4L8 3h8l-4 7zM2 18H0V6h2a6 6 0 1 1 0 12zm20 0a6 6 0 1 1 0-12h2v12h-2z" />
  </StyledIcon>
));

Dxc.displayName = 'Dxc';

export { Dxc };
