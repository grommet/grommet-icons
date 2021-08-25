import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const AppleAppStore = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="AppleAppStore" {...props}>
    <path fill="#1D81F3" d="M3 17a1 1 0 0 1 0-2h10.5c1 0 2 2 1.5 2H3zm14 0a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2h-4zM12.633 3.501a1 1 0 0 1 1.734.998L7.46 16.495a1 1 0 0 1-1.734-.997L12.633 3.5zM4 18.5c.5-1 3.5-2 2.5-.28A852.88 852.88 0 0 1 4.867 21a1 1 0 0 1-1.734-.998L4 18.5zM9.133 4.499a1 1 0 1 1 1.734-.998L12.61 6.53a1 1 0 1 1-1.733.998L9.133 4.499zM13 11.5c-.898-1.5 0-4.5.716-3.004L20.366 20a1 1 0 0 1-1.733.998L13 11.5z" />
  </StyledIcon>
));

AppleAppStore.displayName = 'AppleAppStore';

export { AppleAppStore };
