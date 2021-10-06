import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Archive = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Archive" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M3 23h18V6H3v17zm6-9h6v-4H9v4zM1 6h22V1H1v5z" />
  </StyledIcon>
));

Archive.displayName = 'Archive';

export { Archive };
