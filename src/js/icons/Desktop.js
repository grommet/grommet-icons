import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Desktop = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Desktop" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 1h22v18H1V1zm4 22h14H5zm5-4v4-4zm4 0v4-4z" />
  </StyledIcon>
));

Desktop.displayName = 'Desktop';

export { Desktop };
