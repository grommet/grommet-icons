import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const CircleInformation = forwardRef((props, ref) => (
  <StyledIcon
    ref={ref}
    viewBox="0 0 24 24"
    a11yTitle="CircleInformation"
    {...props}
  >
    <path
      d="M12 10C12.5523 10 13 10.4477 13 11V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11C11 10.4477 11.4477 10 12 10Z"
      fill="#000"
    />
    <path
      d="M12 6.5C12.5523 6.5 13 6.94772 13 7.5V7.59961C13 8.15189 12.5523 8.59961 12 8.59961C11.4477 8.59961 11 8.15189 11 7.59961V7.5C11 6.94772 11.4477 6.5 12 6.5Z"
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

CircleInformation.displayName = 'CircleInformation';
export { CircleInformation };
