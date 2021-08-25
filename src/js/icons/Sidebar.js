import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Sidebar = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Sidebar" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 22h22V2H1v20zM16 2v20V2z" />
  </StyledIcon>
));

Sidebar.displayName = 'Sidebar';

export { Sidebar };
