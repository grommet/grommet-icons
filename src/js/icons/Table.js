import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Table = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Table" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M8 5v18m8-18v18M1 11h22M1 5h22M1 17h22M1 1h22v22H1V1z" />
  </StyledIcon>
));

Table.displayName = 'Table';

export { Table };
