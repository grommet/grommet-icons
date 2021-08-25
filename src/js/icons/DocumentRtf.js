import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentRtf = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentRtf" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5m-2.5 6h-4v7m3-3.5h-3m-8-3.5h6m-3 0v7M3 19v-7h1.5C5 12 7 12 7 14s-2 2-2.5 2H3m2.25 0 2.25 3" />
  </StyledIcon>
));

DocumentRtf.displayName = 'DocumentRtf';

export { DocumentRtf };
