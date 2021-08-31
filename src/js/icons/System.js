import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const System = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="System" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 19h22V1H1v18zm4 4h14H5zm3 0h8v-4H8v4zM7.757 5.757l2.122 2.122-2.122-2.122zM9 10H6h3zm.879 2.121-2.122 2.122 2.122-2.122zM12 13v3-3zm2.121-.879 2.122 2.122-2.122-2.122zM18 10h-3 3zm-1.757-4.243-2.122 2.122 2.122-2.122zM12 7V4v3zm0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
  </StyledIcon>
));

System.displayName = 'System';

export { System };
