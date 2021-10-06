import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Download = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Download" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 17v6h22v-6M12 2v17m-7-7 7 7 7-7" />
  </StyledIcon>
));

Download.displayName = 'Download';

export { Download };
