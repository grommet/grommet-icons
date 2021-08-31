import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Host = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Host" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M17 4h1v1h-1V4zM3 1h18v22H3V1zm0 12h18H3zm0 5h18H3zM3 8h18H3z" />
  </StyledIcon>
));

Host.displayName = 'Host';

export { Host };
