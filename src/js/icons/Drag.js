import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Drag = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Drag" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M15 5h2V3h-2v2zM7 5h2V3H7v2zm8 8h2v-2h-2v2zm-8 0h2v-2H7v2zm8 8h2v-2h-2v2zm-8 0h2v-2H7v2z" />
  </StyledIcon>
));

Drag.displayName = 'Drag';

export { Drag };
