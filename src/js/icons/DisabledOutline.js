import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DisabledOutline = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DisabledOutline" {...props}>
    <path stroke="#000" strokeWidth="2" fill="none" d="M18 12H6M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z" />
  </StyledIcon>
));

DisabledOutline.displayName = 'DisabledOutline';

export { DisabledOutline };
