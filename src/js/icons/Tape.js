import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Tape = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Tape" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 9C13.6553 9 15 10.3447 15 12C15 13.6553 13.6553 15 12 15C10.3447 15 9 13.6553 9 12C9 10.3447 10.3447 9 12 9ZM12 11C11.4493 11 11 11.4493 11 12C11 12.5507 11.4493 13 12 13C12.5507 13 13 12.5507 13 12C13 11.4493 12.5507 11 12 11Z"
      fill="#000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5C15.8659 5 19 8.13408 19 12C19 15.8659 15.8659 19 12 19C8.13408 19 5 15.8659 5 12C5 8.13408 8.13408 5 12 5ZM12 7C9.23865 7 7 9.23865 7 12C7 14.7614 9.23865 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23865 14.7614 7 12 7Z"
      fill="#000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 1C20.7614 1 23 3.23858 23 6V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H18ZM6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6Z"
      fill="#000"
    />
  </StyledIcon>
));

Tape.displayName = 'Tape';
export { Tape };
