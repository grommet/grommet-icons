import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Switch = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Switch" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M5 1h14v22H5V1zm2.5 10H17v10H7V11h.5zM15 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-4 13v-5h2v5h-2zm1-13.998a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" fill="#000" />
  </StyledIcon>
));

Switch.displayName = 'Switch';

export { Switch };
