import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Compliance = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Compliance" {...props}>
    <path fill="none" stroke="#231F20" strokeWidth="2" d="M8 6h8V1H8v5zm8-3h5v20H3V3h5m0 11 3 3 6-6" />
  </StyledIcon>
));

Compliance.displayName = 'Compliance';

export { Compliance };
