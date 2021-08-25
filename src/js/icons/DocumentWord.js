import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentWord = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentWord" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5m-9 6-1.5 6.75h-.25L9.5 12H9l-2.75 6.75H6L4.5 12H4l2 7h.5L9 12.5h.5L12 19h.5l2-7H14z" />
  </StyledIcon>
));

DocumentWord.displayName = 'DocumentWord';

export { DocumentWord };
