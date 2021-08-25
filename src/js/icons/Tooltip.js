import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Tooltip = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Tooltip" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M16.5 18 12 22.5 7.5 18H1V1h22v17h-6.5zM6 10h1V9H6v1zm5.5 0h1V9h-1v1zm5.5 0h1V9h-1v1z" />
  </StyledIcon>
));

Tooltip.displayName = 'Tooltip';

export { Tooltip };
