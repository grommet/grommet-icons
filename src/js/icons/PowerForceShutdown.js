import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const PowerForceShutdown = forwardRef((props, ref) => (
  <StyledIcon
    ref={ref}
    viewBox="0 0 24 24"
    a11yTitle="PowerForceShutdown"
    {...props}
  >
    <path
      d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"
      fill="#000"
    />
    <path
      d="M11 15V9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15Z"
      fill="#000"
    />
  </StyledIcon>
));

PowerForceShutdown.displayName = 'PowerForceShutdown';
export { PowerForceShutdown };
