import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const RestroomMen = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="RestroomMen" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 13.5 11 8l-1 13m7-7.5L13 8l1 13M12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-1 3h2v5.5h-2V8z" />
  </StyledIcon>
));

RestroomMen.displayName = 'RestroomMen';

export { RestroomMen };
