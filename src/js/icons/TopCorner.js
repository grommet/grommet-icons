import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const TopCorner = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="TopCorner" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M16 4H4v12" />
  </StyledIcon>
));

TopCorner.displayName = 'TopCorner';

export { TopCorner };
