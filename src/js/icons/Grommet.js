import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Grommet = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Grommet" {...props}>
    <path fill="none" stroke="#865CD6" strokeWidth="4" d="M12 2C6.485 2 2 6.485 2 12s4.485 10 10 10 10-4.485 10-10S17.515 2 12 2z" />
  </StyledIcon>
));

Grommet.displayName = 'Grommet';

export { Grommet };
