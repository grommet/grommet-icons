import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DocumentNotes = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentNotes" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M9.75 12v6.5H9.5l-5-6.5H4v7h.25v-6.5h.25l5 6.5h.5v-7h-.25z" />
  </StyledIcon>
));

DocumentNotes.displayName = 'DocumentNotes';

export { DocumentNotes };
