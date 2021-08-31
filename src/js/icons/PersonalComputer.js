import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const PersonalComputer = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="PersonalComputer" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M3 18h18V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13zm-1 2h20c1 0 1-1 1-1H1s0 1 1 1z" />
  </StyledIcon>
));

PersonalComputer.displayName = 'PersonalComputer';

export { PersonalComputer };
