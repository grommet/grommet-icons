import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentDownload = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentDownload" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2.998 1H17.5L21 4.5V23H3L2.998 1zM16 1v5h5m-9 3v9m-4-3 4 4 4-4" />
  </StyledIcon>
));

DocumentDownload.displayName = 'DocumentDownload';

export { DocumentDownload };
