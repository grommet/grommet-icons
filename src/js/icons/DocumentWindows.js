import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentWindows = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentWindows" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5m-8.75 5.5-6 7m0-7 6 7M20.5 12h-4v6h4m-1-3h-3M7 12H3v6h4m-1-3H3" />
  </StyledIcon>
));

DocumentWindows.displayName = 'DocumentWindows';

export { DocumentWindows };
