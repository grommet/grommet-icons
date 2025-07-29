import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentUpdate = forwardRef((props, ref) => (
  <StyledIcon
    ref={ref}
    viewBox="0 0 24 24"
    a11yTitle="DocumentUpdate"
    {...props}
  >
    <path
      fill="none"
      strokeWidth="2"
      d="M2.998 7V1H17.5L21 4.5V23h-6m1-22v5h5M8 23A7 7 0 1 0 8 9a7 7 0 0 0 0 14zm-3.5-6.5L8 13l3.5 3.5m-3.5-3V20"
    />
  </StyledIcon>
));

DocumentUpdate.displayName = 'DocumentUpdate';

export { DocumentUpdate };
