import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Cluster = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Cluster" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M8 9h8V1H8v8zM1 23h8v-8H1v8zm14 0h8v-8h-8v8zM5 15l3-6-3 6zm5 4h4-4zm6-10 3 6-3-6z" />
  </StyledIcon>
));

Cluster.displayName = 'Cluster';

export { Cluster };
