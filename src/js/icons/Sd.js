import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Sd = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Sd" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2 2a2 2 0 0 1 2-2h13a1 1 0 0 1 .707.293l4 4A1 1 0 0 1 22 5v17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm14.586 0H4v20h16V5.414L16.586 2zM5 7V3h2v4H5zm3-4v4h2V3H8zm3 4V3h2v4h-2zm3-2v2h2V5h-2z" fill="#000" />
  </StyledIcon>
));

Sd.displayName = 'Sd';

export { Sd };
