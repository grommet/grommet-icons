import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const StatusCriticalSmall = forwardRef((props, ref) => (
  <StyledIcon
    ref={ref}
    viewBox="0 0 12 12"
    a11yTitle="Status is critical"
    {...props}
  >
    <path
      fillRule="evenodd"
      stroke="#000"
      d="M6.712 1.263a1.005 1.005 0 0 0-1.424 0L1.263 5.288a1.005 1.005 0 0 0 0 1.424l4.025 4.025a1.005 1.005 0 0 0 1.424 0l4.025-4.025a1.005 1.005 0 0 0 0-1.424L6.712 1.263z"
    />
  </StyledIcon>
));

StatusCriticalSmall.displayName = 'StatusCriticalSmall';

export { StatusCriticalSmall };
