import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Shield = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Shield" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 22S3 18 3 5l9-3 9 3c0 13-9 17-9 17zM4 11h16m-8-9v20" />
  </StyledIcon>
));

Shield.displayName = 'Shield';

export { Shield };
