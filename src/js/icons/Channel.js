import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Channel = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Channel" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2 9h20v13H2V9zm19-7-8 7h-2L3 2" />
  </StyledIcon>
));

Channel.displayName = 'Channel';

export { Channel };
