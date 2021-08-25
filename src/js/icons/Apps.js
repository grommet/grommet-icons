import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Apps = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Apps" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M19 5h2V3h-2v2zm-8 0h2V3h-2v2zM3 5h2V3H3v2zm16 8h2v-2h-2v2zm-8 0h2v-2h-2v2zm-8 0h2v-2H3v2zm16 8h2v-2h-2v2zm-8 0h2v-2h-2v2zm-8 0h2v-2H3v2z" />
  </StyledIcon>
));

Apps.displayName = 'Apps';

export { Apps };
