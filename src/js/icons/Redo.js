import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Redo = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Redo" {...props}>
    <path d="M16.82 4 15.4 5.44 17.94 8H8.23a6 6 0 0 0 0 12h2v-2h-2a4 4 0 0 1 0-8h9.71l-2.54 2.51 1.41 1.41L21.77 9z" />
  </StyledIcon>
));

Redo.displayName = 'Redo';

export { Redo };
