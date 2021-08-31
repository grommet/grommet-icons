import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Stop = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Stop" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4 4h16v16H4z" />
  </StyledIcon>
));

Stop.displayName = 'Stop';

export { Stop };
