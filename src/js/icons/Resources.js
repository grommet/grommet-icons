import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Resources = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Resources" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m12 3 9 4.5-9 4.5-9-4.5L12 3zm4.5 7.25L21 12.5 12 17l-9-4.5 4.5-2.25m9 5L21 17.5 12 22l-9-4.5 4.5-2.25" />
  </StyledIcon>
));

Resources.displayName = 'Resources';

export { Resources };
