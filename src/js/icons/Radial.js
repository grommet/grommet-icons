import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Radial = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Radial" {...props}>
    <circle cx="12" cy="12" r="11" fill="none" stroke="#000" strokeWidth="2" />
  </StyledIcon>
));

Radial.displayName = 'Radial';

export { Radial };
