import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentVideo = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentVideo" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4.998 7V1H19.5L23 4.5V23H4M18 1v5h5M3 10h9v9H3v-9zm9 3 5-2.5v8L12 16v-3z" />
  </StyledIcon>
));

DocumentVideo.displayName = 'DocumentVideo';

export { DocumentVideo };
