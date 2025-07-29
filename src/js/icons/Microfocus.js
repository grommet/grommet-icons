import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Microfocus = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Microfocus" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 5H5V19H19V23H1V5ZM5 1H23V19H19V5H5V1Z"
      fill="#0078EF"
    />
  </StyledIcon>
));

Microfocus.displayName = 'Microfocus';
export { Microfocus };
