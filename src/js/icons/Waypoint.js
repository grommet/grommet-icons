import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Waypoint = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Waypoint" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m3 11 8 2 2 8 8-18z" />
  </StyledIcon>
));

Waypoint.displayName = 'Waypoint';

export { Waypoint };
