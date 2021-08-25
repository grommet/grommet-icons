import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ChapterPrevious = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ChapterPrevious" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M23 3.5V20l-9-6v6L3 12l11-8v6l9-6.5zM2 2v20V2z" />
  </StyledIcon>
));

ChapterPrevious.displayName = 'ChapterPrevious';

export { ChapterPrevious };
