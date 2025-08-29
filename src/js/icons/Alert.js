import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Alert = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Alert" {...props}>
    <path
      d="M12 15.9004C12.5523 15.9004 13 16.3481 13 16.9004V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V16.9004C11 16.3481 11.4477 15.9004 12 15.9004Z"
      fill="#000"
    />
    <path
      d="M12 6.5C12.5523 6.5 13 6.94772 13 7.5V13.5C13 14.0523 12.5523 14.5 12 14.5C11.4477 14.5 11 14.0523 11 13.5V7.5C11 6.94772 11.4477 6.5 12 6.5Z"
      fill="#000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
      fill="#000"
    />
  </StyledIcon>
));

Alert.displayName = 'Alert';
export { Alert };
