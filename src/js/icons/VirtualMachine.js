import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const VirtualMachine = forwardRef((props, ref) => (
  <StyledIcon
    ref={ref}
    viewBox="0 0 24 24"
    a11yTitle="VirtualMachine"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 1C21.6569 1 23 2.34315 23 4V15C23 16.6569 21.6569 18 20 18H18V20C18 21.6569 16.6569 23 15 23H4C2.34315 23 1 21.6569 1 20V9C1 7.34315 2.34315 6 4 6H6V4C6 2.34315 7.34315 1 9 1H20ZM4 8C3.44772 8 3 8.44772 3 9V20C3 20.5523 3.44772 21 4 21H15C15.5523 21 16 20.5523 16 20V18H9C7.34315 18 6 16.6569 6 15V8H4ZM8 15C8 15.5523 8.44772 16 9 16H16V9C16 8.44772 15.5523 8 15 8H8V15ZM9 3C8.44772 3 8 3.44772 8 4V6H15C16.6569 6 18 7.34315 18 9V16H20C20.5523 16 21 15.5523 21 15V4C21 3.44772 20.5523 3 20 3H9Z"
      fill="#000"
    />
  </StyledIcon>
));

VirtualMachine.displayName = 'VirtualMachine';
export { VirtualMachine };
