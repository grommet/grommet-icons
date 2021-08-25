import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentImage = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentImage" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4.998 7V1H19.5L23 4.5V23h-3M18 1v5h5M3 11h13v12H3V11zm4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-2 7 2-3 2 2 4-6 3 4" />
  </StyledIcon>
));

DocumentImage.displayName = 'DocumentImage';

export { DocumentImage };
