import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentTest = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentTest" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="M4.998 6V1H19.5L23 4.5V23h-3M18 1v5h5M6 9h8M8 9v4.5l-5 8V23h14v-1.581L12 13.5V9m-6.5 8.5s2 1.5 4.5 0 4.5 0 4.5 0"
    />
  </StyledIcon>
));

DocumentTest.displayName = 'DocumentTest';

export { DocumentTest };
