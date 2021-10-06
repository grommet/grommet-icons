import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const PowerShutdown = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="PowerShutdown" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 1v8M6.994 4.52a9.044 9.044 0 0 0-1.358 1.116 9 9 0 1 0 11.37-1.117" />
  </StyledIcon>
));

PowerShutdown.displayName = 'PowerShutdown';

export { PowerShutdown };
