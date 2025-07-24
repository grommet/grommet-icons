import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const StatusPlaceholder = forwardRef((props, ref) => (
  <StyledIcon
    ref={ref}
    viewBox="0 0 24 24"
    a11yTitle="StatusPlaceholder"
    {...props}
  >
    <path
      d="M21 6.45361C21 4.79676 19.6569 3.45361 18 3.45361H6C4.34315 3.45361 3 4.79676 3 6.45361V18.4536C3 20.1105 4.34315 21.4536 6 21.4536H18C19.6569 21.4536 21 20.1105 21 18.4536V6.45361ZM23 18.4536C23 21.215 20.7614 23.4536 18 23.4536H6C3.23858 23.4536 1 21.215 1 18.4536V6.45361C1 3.69219 3.23858 1.45361 6 1.45361H18C20.7614 1.45361 23 3.69219 23 6.45361V18.4536Z"
      fill="#000"
    />
  </StyledIcon>
));

StatusPlaceholder.displayName = 'StatusPlaceholder';
export { StatusPlaceholder };
