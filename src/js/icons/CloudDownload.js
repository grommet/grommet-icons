import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const CloudDownload = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CloudDownload" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M6 17A5 5 0 0 1 6 7h6M6 7V6c0-3 2-4 5-4h2c3 0 5 1 5 4v1a5 5 0 0 1 0 10m-6-5v9m-4-4 4 4 4-4" />
  </StyledIcon>
));

CloudDownload.displayName = 'CloudDownload';

export { CloudDownload };
