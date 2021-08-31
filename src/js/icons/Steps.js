import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Steps = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Steps" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M16 6h-5v5H6v5H1v7h22V1h-7z" />
  </StyledIcon>
));

Steps.displayName = 'Steps';

export { Steps };
