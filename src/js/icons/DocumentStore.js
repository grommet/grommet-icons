import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentStore = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentStore" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4.998 7V1H19.5L23 4.5V23h-6m1-22v5h5M3 12s1-2 6-2 6 2 6 2v9s-1 2-6 2-6-2-6-2v-9zm0 5s2 2 6 2 6-2 6-2M3 13s2 2 6 2 6-2 6-2" />
  </StyledIcon>
));

DocumentStore.displayName = 'DocumentStore';

export { DocumentStore };
