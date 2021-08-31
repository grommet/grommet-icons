import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentMissing = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentMissing" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2.998 1H17.5L21 4.5V23H3L2.998 1zM16 1v5h5M9 12l6 6m0-6-6 6" />
  </StyledIcon>
));

DocumentMissing.displayName = 'DocumentMissing';

export { DocumentMissing };
