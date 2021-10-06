import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Location = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Location" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 22s-8-6-8-12c0-5 4-8 8-8s8 3 8 8c0 6-8 12-8 12zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </StyledIcon>
));

Location.displayName = 'Location';

export { Location };
