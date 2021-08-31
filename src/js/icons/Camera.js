import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Camera = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Camera" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 21V7h5l2-4h8l2 4h5v14H1zm11-3a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
  </StyledIcon>
));

Camera.displayName = 'Camera';

export { Camera };
