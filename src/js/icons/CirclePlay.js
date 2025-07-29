import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const CirclePlay = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CirclePlay" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.00195 7.63281C9.31238 7.45453 9.69466 7.45544 10.0039 7.63574L16.0039 11.1357C16.3111 11.315 16.5 11.6443 16.5 12C16.5 12.3557 16.3111 12.685 16.0039 12.8643L10.0039 16.3643C9.69466 16.5446 9.31238 16.5455 9.00195 16.3672C8.69146 16.1888 8.5 15.8581 8.5 15.5V8.5C8.5 8.14193 8.69146 7.81115 9.00195 7.63281ZM11.5 12.0078L11.5137 12L11.5 11.9912V12.0078Z"
      fill="#000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
      fill="#000"
    />
  </StyledIcon>
));

CirclePlay.displayName = 'CirclePlay';
export { CirclePlay };
