import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Video = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Video" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m15 9 8-4v14l-8-4V9zM1 5h14v14H1V5z" />
  </StyledIcon>
));

Video.displayName = 'Video';

export { Video };
