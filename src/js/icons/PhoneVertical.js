import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const PhoneVertical = forwardRef((props, ref) => (
  <StyledIcon
    ref={ref}
    viewBox="0 0 24 24"
    a11yTitle="PhoneVertical"
    {...props}
  >
    <path
      d="M13 4.27686C13.5523 4.27686 14 4.72457 14 5.27686C14 5.82914 13.5523 6.27686 13 6.27686H11C10.4477 6.27686 10 5.82914 10 5.27686C10 4.72457 10.4477 4.27686 11 4.27686H13Z"
      fill="#000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 1.27686C17.6569 1.27686 19 2.62 19 4.27686V20.2769C19 21.9337 17.6569 23.2769 16 23.2769H8C6.34315 23.2769 5 21.9337 5 20.2769V4.27686C5 2.62 6.34315 1.27686 8 1.27686H16ZM7 20.2769C7 20.8291 7.44772 21.2769 8 21.2769H16C16.5523 21.2769 17 20.8291 17 20.2769V19.2769H7V20.2769ZM8 3.27686C7.44772 3.27686 7 3.72457 7 4.27686V17.2769H17V4.27686C17 3.72457 16.5523 3.27686 16 3.27686H8Z"
      fill="#000"
    />
  </StyledIcon>
));

PhoneVertical.displayName = 'PhoneVertical';
export { PhoneVertical };
