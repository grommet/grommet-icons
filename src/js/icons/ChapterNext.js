import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ChapterNext = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ChapterNext" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 3.5V20l9-6v6l11-8-11-8v6L1 3.5zM22 2v20V2z" />
  </StyledIcon>
));

ChapterNext.displayName = 'ChapterNext';

export { ChapterNext };
