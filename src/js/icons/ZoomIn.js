import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const ZoomIn = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ZoomIn" {...props}>
    <path
      d="M11 6C11.5523 6 12 6.44772 12 7V10H15C15.5523 10 16 10.4477 16 11C16 11.5523 15.5523 12 15 12H12V15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15V12H7C6.44772 12 6 11.5523 6 11C6 10.4477 6.44772 10 7 10H10V7C10 6.44772 10.4477 6 11 6Z"
      fill="#000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 1C16.5228 1 21 5.47715 21 11C21 13.4013 20.1529 15.6043 18.7422 17.3281L22.707 21.293C23.0976 21.6835 23.0976 22.3165 22.707 22.707C22.3165 23.0976 21.6835 23.0976 21.293 22.707L17.3281 18.7422C15.6043 20.1529 13.4013 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1ZM11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3Z"
      fill="#000"
    />
  </StyledIcon>
));

ZoomIn.displayName = 'ZoomIn';
export { ZoomIn };
