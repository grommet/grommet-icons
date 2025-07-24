import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const MailOption = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="MailOption" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 1C20.7614 1 23 3.23858 23 6V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H18ZM13.874 13.7812C12.7784 14.6578 11.2216 14.6578 10.126 13.7812L3 8.08105V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V8.08105L13.874 13.7812ZM6 3C4.4978 3 3.25241 4.10395 3.0332 5.54492L11.375 12.2197C11.7402 12.5119 12.2598 12.5119 12.625 12.2197L20.9658 5.54492C20.7466 4.10402 19.5022 3 18 3H6Z"
      fill="#000"
    />
  </StyledIcon>
));

MailOption.displayName = 'MailOption';
export { MailOption };
