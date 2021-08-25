import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Note = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Note" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 23h15l7-7V1H1v22zm14 0v-8h8" />
  </StyledIcon>
));

Note.displayName = 'Note';

export { Note };
