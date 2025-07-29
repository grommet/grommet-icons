import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const CheckboxSelected = forwardRef((props, ref) => (
  <StyledIcon
    ref={ref}
    viewBox="0 0 24 24"
    a11yTitle="CheckboxSelected"
    {...props}
  >
    <path
      d="M15.1523 7.46973C15.4451 7.00167 16.0621 6.85971 16.5303 7.15234C16.9983 7.44514 17.1403 8.06205 16.8477 8.53027L11.8477 16.5303C11.6861 16.7885 11.4159 16.9587 11.1133 16.9932C10.8105 17.0276 10.5085 16.9225 10.293 16.707L7.29297 13.707C6.90244 13.3165 6.90244 12.6835 7.29297 12.293C7.68349 11.9024 8.31651 11.9024 8.70703 12.293L10.8174 14.4033L15.1523 7.46973Z"
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

CheckboxSelected.displayName = 'CheckboxSelected';
export { CheckboxSelected };
