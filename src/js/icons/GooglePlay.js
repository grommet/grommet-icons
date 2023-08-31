import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const GooglePlay = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="GooglePlay" {...props}>
    <g fill="none" stroke="#444" strokeWidth="2">
      <path strokeLinejoin="round" d="M3 2v20l18-10z" />
      <path d="m3 2 11 14M3 22 14 8" />
    </g>
  </StyledIcon>
));

GooglePlay.displayName = 'GooglePlay';

export { GooglePlay };
