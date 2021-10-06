import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Folder = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Folder" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2 10V2h8l3 4h9v4H2zm0 0h20v12H2V10z" />
  </StyledIcon>
));

Folder.displayName = 'Folder';

export { Folder };
