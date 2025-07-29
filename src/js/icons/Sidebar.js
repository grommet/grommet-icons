import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Sidebar = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Sidebar" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 1C20.7614 1 23 3.23858 23 6V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H18ZM6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H14V3H6ZM16 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H16V21Z"
      fill="#000"
    />
  </StyledIcon>
));

Sidebar.displayName = 'Sidebar';
export { Sidebar };
