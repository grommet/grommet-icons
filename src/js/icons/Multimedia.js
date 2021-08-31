import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Multimedia = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Multimedia" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 8v14h20V9M11 4 7 8M2 4v4h15l4-4H2zm14 0-4 4" />
  </StyledIcon>
));

Multimedia.displayName = 'Multimedia';

export { Multimedia };
