import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const StatusCritical = forwardRef((props, ref) => (
  <StyledIcon
    ref={ref}
    viewBox="0 0 24 24"
    a11yTitle="Status is critical"
    {...props}
  >
    <path
      fill="none"
      stroke="#000"
      strokeWidth="2"
      d="M12.703 2.703a.99.99 0 0 0-1.406 0l-8.594 8.594a.99.99 0 0 0 0 1.406l8.594 8.594a.99.99 0 0 0 1.406 0l8.594-8.594a.99.99 0 0 0 0-1.406l-8.594-8.594zM8.983 14.7 14.7 8.983m-5.717 0L14.7 14.7"
    />
  </StyledIcon>
));

StatusCritical.displayName = 'StatusCritical';

export { StatusCritical };
