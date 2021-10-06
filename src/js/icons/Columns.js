import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Columns = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Columns" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M17 2v20V2zm-5 0v20V2zM7 2v20V2zM2 22h20V2H2v20z" />
  </StyledIcon>
));

Columns.displayName = 'Columns';

export { Columns };
