import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Sign = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Sign" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M8 23h7c3 0 4-2 4-5V6c0-2-1-2-1.5-2S16 4 16 6v7c0-1 0-2-1.5-2S13 13 13 13c0-1 0-2-1.5-2S10 12 10 13V4c0-1 .03-2-1.5-2C7 2 7 3 7 4v14-4c0-1-.55-2-2-2H4v6c0 3.962 2 5.024 4 5z" />
  </StyledIcon>
));

Sign.displayName = 'Sign';

export { Sign };
