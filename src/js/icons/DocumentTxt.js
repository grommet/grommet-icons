import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentTxt = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentTxt" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M2 12h5m-2.5 0v7M16 12h5m-2.5 0v7m-4-7.5-6 7m0-7 6 7" />
  </StyledIcon>
));

DocumentTxt.displayName = 'DocumentTxt';

export { DocumentTxt };
