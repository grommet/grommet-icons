import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const List = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="List" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeWidth="2" d="M9 6h12M9 12h12M9 18h8M4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </StyledIcon>
));

List.displayName = 'List';

export { List };
