import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Return = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Return" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m9 19-5-5 5-5m9-5v10H5" />
  </StyledIcon>
));

Return.displayName = 'Return';

export { Return };
