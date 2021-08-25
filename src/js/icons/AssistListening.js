import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const AssistListening = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="AssistListening" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 21c.757.667 1.424 1 2 1 2 0 3-1 3-3 0-1.333.667-2.667 2-4 1.267-1.267 2-3.067 2-5a7 7 0 0 0-14 0m11 0a4 4 0 1 0-8 0M3 20l5-6 1 4 5-6" />
  </StyledIcon>
));

AssistListening.displayName = 'AssistListening';

export { AssistListening };
