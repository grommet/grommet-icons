import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Deliver = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Deliver" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M3 18H1V3h13v14m0 1H9m-3 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm11 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM14 8h5l4 5v5h-3" />
  </StyledIcon>
));

Deliver.displayName = 'Deliver';

export { Deliver };
