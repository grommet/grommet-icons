import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Flows = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Flows" {...props}>
    <path stroke="#000" strokeWidth="2" fill="none" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm0 11a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z" />
  </StyledIcon>
));

Flows.displayName = 'Flows';

export { Flows };
