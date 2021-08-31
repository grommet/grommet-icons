import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Local = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Local" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 4h22v16H1V4zm10 4h12M1 16h22M1 12h22M11 4v8" />
  </StyledIcon>
));

Local.displayName = 'Local';

export { Local };
