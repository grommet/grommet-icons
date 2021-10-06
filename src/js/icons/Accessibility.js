import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Accessibility = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Accessibility" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h7v6l-4 7M20 8h-7v6l4 7M12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-1 3h2v5h-2V8z" />
  </StyledIcon>
));

Accessibility.displayName = 'Accessibility';

export { Accessibility };
