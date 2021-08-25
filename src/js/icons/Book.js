import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Book = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Book" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M10 1v10l3-2 3 2V1M5.5 18a2.5 2.5 0 1 0 0 5H22M3 20.5v-17A2.5 2.5 0 0 1 5.5 1H21v17.007H5.492M20.5 18a2.5 2.5 0 1 0 0 5" />
  </StyledIcon>
));

Book.displayName = 'Book';

export { Book };
