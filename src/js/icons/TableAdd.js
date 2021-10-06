import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const TableAdd = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="TableAdd" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M8 5v18m8-18v6M1 11h16M1 5h22M1 17h10m6 6H1V1h22v16m-6 6a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-9v6m0-6v6m-3-3h6" />
  </StyledIcon>
));

TableAdd.displayName = 'TableAdd';

export { TableAdd };
