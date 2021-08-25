import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const RadialSelected = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="RadialSelected" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
  </StyledIcon>
));

RadialSelected.displayName = 'RadialSelected';

export { RadialSelected };
