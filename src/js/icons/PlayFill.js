import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const PlayFill = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="PlayFill" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m3 22 18-10L3 2v20zm2-3 12.6-7L5 5v14zm2-3 7.2-4L7 8v8zm2-3 1.8-1L9 11v2z" />
  </StyledIcon>
));

PlayFill.displayName = 'PlayFill';

export { PlayFill };
