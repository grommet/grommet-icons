import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Grid = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Grid" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M8 1v22m8-22v22M1 8h22M1 16h22M1 1h22v22H1V1z" />
  </StyledIcon>
));

Grid.displayName = 'Grid';

export { Grid };
