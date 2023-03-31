import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Plug = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Plug" {...props}>
    <path stroke="#000" strokeWidth="2" fill="none" d="M15 6V1m-3 23v-9M9 6V1M6 6h12v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6z" />
  </StyledIcon>
));

Plug.displayName = 'Plug';

export { Plug };
