import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Share = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Share" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M19 13v10H1V5h10m3-4h9v9m-13 4L23 1 10 14z" />
  </StyledIcon>
));

Share.displayName = 'Share';

export { Share };
