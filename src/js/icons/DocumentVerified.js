import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentVerified = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentVerified" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2.998 1H17.5L21 4.5V23H3L2.998 1zM16 1v5h5M7.5 15l3 3 6-6" />
  </StyledIcon>
));

DocumentVerified.displayName = 'DocumentVerified';

export { DocumentVerified };
