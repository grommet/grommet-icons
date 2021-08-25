import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Map = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Map" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M15 15h4l3 7H2l3-7h4m4-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 8c0 5 6 10 6 10s6-5 6-10c0-3.417-2.686-6-6-6S6 4.583 6 8z" />
  </StyledIcon>
));

Map.displayName = 'Map';

export { Map };
