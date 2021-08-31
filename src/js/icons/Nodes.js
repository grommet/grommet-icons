import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Nodes = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Nodes" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm14-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
  </StyledIcon>
));

Nodes.displayName = 'Nodes';

export { Nodes };
