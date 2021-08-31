import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Play = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Play" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m3 22 18-10L3 2z" />
  </StyledIcon>
));

Play.displayName = 'Play';

export { Play };
