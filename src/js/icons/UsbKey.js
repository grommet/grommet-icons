import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const UsbKey = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="UsbKey" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M16.1025 5.00488C16.6067 5.05621 17 5.48232 17 6V7H23L23.1025 7.00488C23.6067 7.05621 24 7.48232 24 8V16C24 16.5523 23.5523 17 23 17H17V18C17 18.5523 16.5523 19 16 19H5C2.23858 19 0 16.7614 0 14V10C0 7.23858 2.23858 5 5 5H16L16.1025 5.00488ZM5 7C3.34315 7 2 8.34315 2 10V14C2 15.6569 3.34315 17 5 17H15V7H5ZM17 15H22V9H17V15Z" fill="#555555"/>
  </StyledIcon>
));

UsbKey.displayName = 'UsbKey';
export { UsbKey };
