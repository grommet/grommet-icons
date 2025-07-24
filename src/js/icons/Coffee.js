import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Coffee = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Coffee" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 1C20.1046 1 21 1.89543 21 3V6C21 6.55228 20.5523 7 20 7H19.8828L18.2109 20.3721C18.0233 21.8734 16.7473 23 15.2344 23H7.76562C6.25266 23 4.97673 21.8734 4.78906 20.3721L3.11719 7H3C2.44772 7 2 6.55228 2 6V3C2 1.89543 2.89543 1 4 1H19ZM6.77344 20.124C6.83599 20.6244 7.2613 21 7.76562 21H15.2344C15.7387 21 16.164 20.6244 16.2266 20.124L17.8672 7H5.13281L6.77344 20.124ZM4 5H19V3H4V5Z"
      fill="#000"
    />
  </StyledIcon>
));

Coffee.displayName = 'Coffee';
export { Coffee };
