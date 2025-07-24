import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const StopFill = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="StopFill" {...props}>
    <path d="M18 1C20.7614 1 23 3.23858 23 6V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H18Z" fill="#555555"/>
  </StyledIcon>
));

StopFill.displayName = 'StopFill';
export { StopFill };
