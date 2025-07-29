import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Phone = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Phone" {...props}>
    <path
      fill="none"
      strokeWidth="2"
      d="M6.375 2C5 2 3 3.5 2.5 4.5c-.715 1.43-.597 1.99-.125 3.5.625 2 2.457 5.545 5 8 3.625 3.5 7 5 8.5 5.5s3.125 0 4.125-1 2-2 .875-3.5c-.797-1.063-1.959-2.292-3.375-3-1.288-.644-2.056-.41-2.5.5-.246.503-.322 1.466-.5 2-.225.674-1.125.5-2.125 0C11.418 16.021 9 14 7 11c-1.24-1.859.742-1.87 2-2.5 1-.5 1.31-1.65.5-3C8 3 7.5 2 6.375 2z"
    />
  </StyledIcon>
));

Phone.displayName = 'Phone';

export { Phone };
