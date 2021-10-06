import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Eject = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Eject" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M21 14 12 2 3 14h18zM2 22h20v-4H2v4z" />
  </StyledIcon>
));

Eject.displayName = 'Eject';

export { Eject };
