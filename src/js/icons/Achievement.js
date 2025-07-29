import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Achievement = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Achievement" {...props}>
    <path
      fill="none"
      strokeWidth="2"
      d="M10.325 14.763A6.002 6.002 0 0 1 6 9V1h12v9M6 3H1v4c0 2.509 1.791 4 4 4h1m14.034-.115C21.742 10.49 23 9.103 23 7V3h-5m-8 16H5v4h11.5m0-13a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm3.5 4-4.5 4.5L13 16m-2.794-.576A4 4 0 0 0 8 19"
    />
  </StyledIcon>
));

Achievement.displayName = 'Achievement';

export { Achievement };
