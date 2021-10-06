import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const InstallOption = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="InstallOption" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 6v10V6zm0-5c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm5 11-5 5-5-5" />
  </StyledIcon>
));

InstallOption.displayName = 'InstallOption';

export { InstallOption };
