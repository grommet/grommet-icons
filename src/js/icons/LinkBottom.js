import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const LinkBottom = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="LinkBottom" {...props}>
    <path
      d="M22 21C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H22Z"
      fill="#000"
    />
    <path
      d="M12 1C12.5523 1 13 1.44772 13 2V16.5859L18.293 11.293C18.6835 10.9024 19.3165 10.9024 19.707 11.293C20.0976 11.6835 20.0976 12.3165 19.707 12.707L12.707 19.707C12.3165 20.0976 11.6835 20.0976 11.293 19.707L4.29297 12.707C3.90244 12.3165 3.90244 11.6835 4.29297 11.293C4.68349 10.9024 5.31651 10.9024 5.70703 11.293L11 16.5859V2C11 1.44772 11.4477 1 12 1Z"
      fill="#000"
    />
  </StyledIcon>
));

LinkBottom.displayName = 'LinkBottom';
export { LinkBottom };
