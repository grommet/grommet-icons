import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Briefcase = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Briefcase" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 6h22v15H1V6zm5 0v15M18 6v15M8 6V3h8v3" />
  </StyledIcon>
));

Briefcase.displayName = 'Briefcase';

export { Briefcase };
