import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Bookmark = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Bookmark" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M5 1v21l7-5 7 5V1z" />
  </StyledIcon>
));

Bookmark.displayName = 'Bookmark';

export { Bookmark };
