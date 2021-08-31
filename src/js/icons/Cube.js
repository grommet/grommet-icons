import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Cube = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Cube" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m12 2 10 5v10l-10 5-10-5V7l10-5zM2 7l10 5 10-5m-10 5v10-10z" />
  </StyledIcon>
));

Cube.displayName = 'Cube';

export { Cube };
