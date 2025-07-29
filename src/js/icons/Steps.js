import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Steps = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Steps" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 2C21.1046 2 22 2.89543 22 4V20C22.5523 20 23 20.4477 23 21C23 21.5523 22.5523 22 22 22H2C1.44772 22 1 21.5523 1 21C1 20.4477 1.44772 20 2 20V16C2 14.8954 2.89543 14 4 14H8V10C8 8.89543 8.89543 8 10 8H14V4C14 2.89543 14.8954 2 16 2H20ZM16 9C16 9.55228 15.5523 10 15 10H10V15C10 15.5523 9.55228 16 9 16H4V20H20V4H16V9Z"
      fill="#000"
    />
  </StyledIcon>
));

Steps.displayName = 'Steps';
export { Steps };
