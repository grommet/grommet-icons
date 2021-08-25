import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentLocked = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentLocked" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4.998 7V1H19.5L23 4.5V23h-6m1-22v5h5M4 15h10v8H4v-8zm2 0v-2a3 3 0 0 1 6 0v2m-4 4h2" />
  </StyledIcon>
));

DocumentLocked.displayName = 'DocumentLocked';

export { DocumentLocked };
