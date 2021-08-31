import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Volume = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Volume" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M15 16a4 4 0 0 0 0-8m0 12c5 0 8-3.589 8-8s-3.589-8-8-8M1 12V8h5l6-5v18l-6-5H1v-4" />
  </StyledIcon>
));

Volume.displayName = 'Volume';

export { Volume };
