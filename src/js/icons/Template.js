import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Template = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Template" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M18 1C20.7614 1 23 3.23858 23 6V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H18ZM3 18C3 19.6569 4.34315 21 6 21H7V9H3V18ZM9 21H18C19.6569 21 21 19.6569 21 18V9H9V21ZM6 3C4.34315 3 3 4.34315 3 6V7H21V6C21 4.34315 19.6569 3 18 3H6Z" fill="#555555"/>
  </StyledIcon>
));

Template.displayName = 'Template';
export { Template };
