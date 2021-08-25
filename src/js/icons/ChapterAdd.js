import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ChapterAdd = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ChapterAdd" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M5 14V5h14v15h-8m8-4h4V1H9v4M5 16v8m4-4H1" />
  </StyledIcon>
));

ChapterAdd.displayName = 'ChapterAdd';

export { ChapterAdd };
