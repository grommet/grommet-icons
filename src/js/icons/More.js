import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const More = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="More" {...props}>
    <path
      d="M4 10C5.10457 10 6 10.8954 6 12C6 13.1046 5.10457 14 4 14C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10Z"
      fill="#000"
    />
    <path
      d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
      fill="#000"
    />
    <path
      d="M20 10C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14C18.8954 14 18 13.1046 18 12C18 10.8954 18.8954 10 20 10Z"
      fill="#000"
    />
  </StyledIcon>
));

More.displayName = 'More';
export { More };
