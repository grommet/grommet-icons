import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Iteration = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Iteration" {...props}>
    <path
      d="M2 11C2.55228 11 3 11.4477 3 12V14C3 17.866 6.13401 21 10 21H12V23H10C5.02944 23 1 18.9706 1 14V12C1 11.4477 1.44772 11 2 11Z"
      fill="#000"
    />
    <path
      d="M5 6C5.55228 6 6 6.44772 6 7V13C6 15.7614 8.23858 18 11 18H17V20H11C7.13401 20 4 16.866 4 13V7C4 6.44772 4.44772 6 5 6Z"
      fill="#000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 1C20.7614 1 23 3.23858 23 6V12C23 14.7614 20.7614 17 18 17H12C9.23858 17 7 14.7614 7 12V6C7 3.23858 9.23858 1 12 1H18ZM12 3C10.3431 3 9 4.34315 9 6V12C9 13.6569 10.3431 15 12 15H18C19.6569 15 21 13.6569 21 12V6C21 4.34315 19.6569 3 18 3H12Z"
      fill="#000"
    />
  </StyledIcon>
));

Iteration.displayName = 'Iteration';
export { Iteration };
