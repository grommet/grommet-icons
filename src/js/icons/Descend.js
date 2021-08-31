import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Descend = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Descend" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m2 16 6 6 6-6M11 3h11M11 7h8m-8 4h5M8 22V2" />
  </StyledIcon>
));

Descend.displayName = 'Descend';

export { Descend };
