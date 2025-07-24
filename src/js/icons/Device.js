import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Device = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Device" {...props}>
    <path d="M13 4C13.5523 4 14 4.44772 14 5C14 5.55228 13.5523 6 13 6H11C10.4477 6 10 5.55228 10 5C10 4.44772 10.4477 4 11 4H13Z" fill="#555555"/>
<path fillRule="evenodd" clipRule="evenodd" d="M16 1C17.6569 1 19 2.34315 19 4V20C19 21.6569 17.6569 23 16 23H8C6.34315 23 5 21.6569 5 20V4C5 2.34315 6.34315 1 8 1H16ZM7 20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20V19H7V20ZM8 3C7.44772 3 7 3.44772 7 4V17H17V4C17 3.44772 16.5523 3 16 3H8Z" fill="#555555"/>
  </StyledIcon>
));

Device.displayName = 'Device';
export { Device };
