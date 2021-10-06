import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Tree = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Tree" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4 1h6v6H4V1zm12 10h4v4h-4v-4zm0 8h4v4h-4v-4zM7 7v14h9m-9-8h9" />
  </StyledIcon>
));

Tree.displayName = 'Tree';

export { Tree };
