import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Database = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Database" {...props}>
    <path d="M6 15H5V13H6V15Z" fill="#000" />
    <path d="M19 15H10V13H19V15Z" fill="#000" />
    <path d="M6 7H5V5H6V7Z" fill="#000" />
    <path d="M19 7H10V5H19V7Z" fill="#000" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 1C21.6569 1 23 2.34315 23 4V8C23 8.76947 22.7077 9.46897 22.2314 10C22.7077 10.531 23 11.2305 23 12V16C23 17.6569 21.6569 19 20 19H13V21H22.5C23.0523 21 23.5 21.4477 23.5 22C23.5 22.5523 23.0523 23 22.5 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H11V19H4C2.34315 19 1 17.6569 1 16V12C1 11.2305 1.29228 10.531 1.76855 10C1.29228 9.46897 1 8.76947 1 8V4C1 2.34315 2.34315 1 4 1H20ZM4 11C3.44772 11 3 11.4477 3 12V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16V12C21 11.4477 20.5523 11 20 11H4ZM4 3C3.44772 3 3 3.44772 3 4V8C3 8.55228 3.44772 9 4 9H20C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H4Z"
      fill="#000"
    />
  </StyledIcon>
));

Database.displayName = 'Database';
export { Database };
