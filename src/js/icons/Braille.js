import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Braille = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Braille" {...props}>
    <path d="M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 20a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm10-10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="none" stroke="#000" strokeWidth="2" />
  </StyledIcon>
));

Braille.displayName = 'Braille';

export { Braille };
