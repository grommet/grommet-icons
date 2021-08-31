import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Article = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Article" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M16 7h3v4h-3V7zm-7 8h11M9 11h4M9 7h4M6 18.5a2.5 2.5 0 1 1-5 0V7h5.025M6 18.5V3h17v15.5a2.5 2.5 0 0 1-2.5 2.5h-17" />
  </StyledIcon>
));

Article.displayName = 'Article';

export { Article };
