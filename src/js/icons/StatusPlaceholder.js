import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const StatusPlaceholder = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="StatusPlaceholder" {...props}>
    <path d="M21 6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6ZM23 18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H18C20.7614 1 23 3.23858 23 6V18Z" fill="#555555"/>
  </StyledIcon>
));

StatusPlaceholder.displayName = 'StatusPlaceholder';
export { StatusPlaceholder };
