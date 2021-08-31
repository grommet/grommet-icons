import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Monitor = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Monitor" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 16h22V2H1v14zm4 6h14H5zm4 0h6v-6H9v6z" />
  </StyledIcon>
));

Monitor.displayName = 'Monitor';

export { Monitor };
