import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentTime = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentTime" {...props}>
    <path
      fill="none"
      strokeWidth="2"
      d="M4.998 7V1H19.5L23 4.5V23h-6m1-22v5h5M10 23a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-11v4l3 3"
    />
  </StyledIcon>
));

DocumentTime.displayName = 'DocumentTime';

export { DocumentTime };
