import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Mouse = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Mouse" {...props}>
    <path stroke="#000" strokeWidth="2" fill="none" d="M12 4a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V9a5 5 0 0 1 5-5zm0 0v6m-6 0h12" />
  </StyledIcon>
));

Mouse.displayName = 'Mouse';

export { Mouse };
