import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentPdf = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentPdf" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M3 12h1.5c2 0 2.25 1.25 2.25 2s-.25 2-2.25 2H3.25v2H3v-6zm6.5 6v-6h1.705c1.137 0 2.295.5 2.295 3s-1.158 3-2.295 3H9.5zm7 1v-7h4m-4 3.5h3" />
  </StyledIcon>
));

DocumentPdf.displayName = 'DocumentPdf';

export { DocumentPdf };
