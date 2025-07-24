import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Duplicate = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Duplicate" {...props}>
    <path d="M16 14H18V16H16V18H14V16H12V14H14V12H16V14Z" fill="#555555"/>
<path fillRule="evenodd" clipRule="evenodd" d="M13 0C15.7614 0 18 2.23858 18 5V6H19C21.7614 6 24 8.23858 24 11V19C24 21.7614 21.7614 24 19 24H11C8.23858 24 6 21.7614 6 19V18H5C2.23858 18 0 15.7614 0 13V5C0 2.23858 2.23858 0 5 0H13ZM11 8C9.34315 8 8 9.34315 8 11V19C8 20.6569 9.34315 22 11 22H19C20.6569 22 22 20.6569 22 19V11C22 9.34315 20.6569 8 19 8H11ZM5 2C3.34315 2 2 3.34315 2 5V13C2 14.6569 3.34315 16 5 16H6V11C6 8.23858 8.23858 6 11 6H16V5C16 3.34315 14.6569 2 13 2H5Z" fill="#555555"/>
  </StyledIcon>
));

Duplicate.displayName = 'Duplicate';
export { Duplicate };
