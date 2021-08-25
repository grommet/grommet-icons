import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Domain = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Domain" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M13 3v4-4zM9 3v4-4zM5 3v4-4zM1 7h22H1zm0 14h22V3H1v18z" />
  </StyledIcon>
));

Domain.displayName = 'Domain';

export { Domain };
