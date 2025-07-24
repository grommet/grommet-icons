import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const BarChart = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="BarChart" {...props}>
    <path d="M22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H22V23Z" fill="#555555"/>
<path fillRule="evenodd" clipRule="evenodd" d="M4 5C5.65685 5 7 6.34315 7 8V16C7 17.6569 5.65685 19 4 19C2.34315 19 1 17.6569 1 16V8C1 6.34315 2.34315 5 4 5ZM4 7C3.44772 7 3 7.44772 3 8V16C3 16.5523 3.44772 17 4 17C4.55228 17 5 16.5523 5 16V8C5 7.44772 4.55228 7 4 7Z" fill="#555555"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 9C13.6569 9 15 10.3431 15 12V16C15 17.6569 13.6569 19 12 19C10.3431 19 9 17.6569 9 16V12C9 10.3431 10.3431 9 12 9ZM12 11C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12C13 11.4477 12.5523 11 12 11Z" fill="#555555"/>
<path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V16C23 17.6569 21.6569 19 20 19C18.3431 19 17 17.6569 17 16V4C17 2.34315 18.3431 1 20 1ZM20 3C19.4477 3 19 3.44772 19 4V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V4C21 3.44772 20.5523 3 20 3Z" fill="#555555"/>
  </StyledIcon>
));

BarChart.displayName = 'BarChart';
export { BarChart };
