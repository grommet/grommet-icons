import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const DriveCage = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DriveCage" {...props}>
    <path d="M6 18H5V16H6V18Z" fill="#555555"/>
<path d="M6 12H5V10H6V12Z" fill="#555555"/>
<path d="M6 6H5V4H6V6Z" fill="#555555"/>
<path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V18C23 19.6569 21.6569 21 20 21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H4C2.34315 21 1 19.6569 1 18V4C1 2.34315 2.34315 1 4 1H20ZM3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V15H3V18ZM3 13H21V9H3V13ZM4 3C3.44772 3 3 3.44772 3 4V7H21V4C21 3.44772 20.5523 3 20 3H4Z" fill="#555555"/>
  </StyledIcon>
));

DriveCage.displayName = 'DriveCage';
export { DriveCage };
