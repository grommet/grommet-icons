import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Directions = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Directions" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m17 11 5-5-5-5m5 5h-4a6 6 0 0 0-6 6v12M7 6l-5 5 5 5m-5-5h4a6 6 0 0 1 6 6v7" />
  </StyledIcon>
));

Directions.displayName = 'Directions';

export { Directions };
