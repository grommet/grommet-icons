import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Gallery = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Gallery" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 1h18v18H1V1zm4 18v4h18V5.97h-4M6 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM2 18l5-6 3 3 4-5 5 6" />
  </StyledIcon>
));

Gallery.displayName = 'Gallery';

export { Gallery };
