import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Deploy = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Deploy" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M23 1s-6.528-.458-9 2c-.023.037-4 4-4 4L5 8l-3 2 8 4 4 8 2-3 1-5s3.963-3.977 4-4c2.458-2.472 2-9 2-9zm-6 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 17c-1-1-3-1-4 0s-1 5-1 5 4 0 5-1 1-3 0-4z" />
  </StyledIcon>
));

Deploy.displayName = 'Deploy';

export { Deploy };
