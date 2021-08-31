import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const RotateRight = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="RotateRight" {...props}>
    <path d="M12.48 3.43a9.09 9.09 0 0 1 5.82 2.12v-3.2h1.64v6.5h-6.5V7.21h4.26a7.46 7.46 0 1 0 1.47 8.65l1.46.73a9.11 9.11 0 1 1-8.15-13.16z" />
  </StyledIcon>
));

RotateRight.displayName = 'RotateRight';

export { RotateRight };
