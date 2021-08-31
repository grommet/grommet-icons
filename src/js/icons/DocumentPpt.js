import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentPpt = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentPpt" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M4 12h1.5c2 0 3.5.5 3.5 2.25S7.5 16.5 5.5 16.5H4.25V19H4v-7z" />
  </StyledIcon>
));

DocumentPpt.displayName = 'DocumentPpt';

export { DocumentPpt };
