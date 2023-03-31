import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Webcam = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Webcam" {...props}>
    <path d="M20 22H4" stroke="#000" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M15.5 18v3m-7.5.5V18" stroke="#000" strokeWidth="2" fill="none" />
    <path
      clipRule="evenodd"
      d="M12 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"
      stroke="#000"
      strokeWidth="2"
      fill="none"
    />
    <path
      clipRule="evenodd"
      d="M12 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
      stroke="#000"
      strokeWidth="2"
      fill="none"
    />
    <path
      clipRule="evenodd"
      d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
      stroke="#000"
      strokeWidth="2"
      fill="none"
    />
    <path
      clipRule="evenodd"
      d="M12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      stroke="#000"
      strokeWidth="2"
      fill="none"
    />
  </StyledIcon>
));

Webcam.displayName = 'Webcam';

export { Webcam };
