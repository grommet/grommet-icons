import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Upgrade = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Upgrade" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 18V8v10zm0 5c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm5-11-5-5-5 5" />
  </StyledIcon>
));

Upgrade.displayName = 'Upgrade';

export { Upgrade };
