import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Manual = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Manual" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M14 9v8-8zm-4 0v8-8zM8 5a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM4 23h16v-3H4v3zm3-3h10v-3H7v3z" />
  </StyledIcon>
));

Manual.displayName = 'Manual';

export { Manual };
