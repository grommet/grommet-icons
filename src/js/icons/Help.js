import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Help = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Help" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-5v-3c0-2 1-2 3-3s3-2.842 3-5A6 6 0 1 0 6 7" />
  </StyledIcon>
));

Help.displayName = 'Help';

export { Help };
