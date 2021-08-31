import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Document = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Document" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M14 1v7h7m0 15H3V1h12l3 3 3 3v16z" />
  </StyledIcon>
));

Document.displayName = 'Document';

export { Document };
