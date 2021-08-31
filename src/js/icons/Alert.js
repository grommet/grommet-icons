import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Alert = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Alert" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 17v2m0-9v6m0-13L2 22h20L12 3z" />
  </StyledIcon>
));

Alert.displayName = 'Alert';

export { Alert };
