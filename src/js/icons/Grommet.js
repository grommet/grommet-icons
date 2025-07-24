import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Grommet = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Grommet" {...props}>
    <path fill="none" stroke="#865CD6" strokeWidth="4" d="M12,2 C6.485,2 2,6.485 2,12 C2,17.515 6.485,22 12,22 C17.515,22 22,17.515 22,12 C22,6.485 17.515,2 12,2 Z"/>
  </StyledIcon>
));

Grommet.displayName = 'Grommet';
export { Grommet };
