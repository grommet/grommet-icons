import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Like = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Like" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 23h19c2 0 3-1 3-3V10h-7V4c0-2-1-3-3-3h-2s-.016 6-.016 7.326C10.984 9.652 10 11 8 11H1v12zm5 0V11" />
  </StyledIcon>
));

Like.displayName = 'Like';

export { Like };
