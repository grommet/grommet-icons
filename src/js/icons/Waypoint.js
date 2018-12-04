import React from 'react';

import { StyledIcon } from '../StyledIcon';

export const Waypoint = props => (
  <StyledIcon viewBox='0 0 24 24' a11yTitle='Waypoint' {...props}>
    <polygon fill='none' stroke='#000' strokeWidth='2' points='3 11 11 13 13 21 21 3' />
  </StyledIcon>
);
