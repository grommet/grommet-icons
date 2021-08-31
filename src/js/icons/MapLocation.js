import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const MapLocation = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="MapLocation" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M17.5 6.5 23 9v13l-7-3-8 3-7-3V6l5 2m10 11v-7M8 22V12m4 4.273S6 11.5 6 7c0-3.75 3-6 6-6s6 2.25 6 6c0 4.5-6 9.273-6 9.273zM13 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
  </StyledIcon>
));

MapLocation.displayName = 'MapLocation';

export { MapLocation };
