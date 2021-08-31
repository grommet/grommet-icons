import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Database = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Database" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 2h22v7H1V2zm3 10h1v1H4v-1zm0-7h1v1H4V5zm0 14h1v1H4v-1zm-3-3h22v7H1v-7zm0-7h22v7H1V9z" />
  </StyledIcon>
));

Database.displayName = 'Database';

export { Database };
