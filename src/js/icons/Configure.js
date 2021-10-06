import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Configure = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Configure" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M16 15c4.009-.065 7-3.033 7-7 0-3.012-.997-2.015-2-1-.991.98-3 3-3 3l-4-4s2.02-2.009 3-3c1.015-1.003 1.015-2-1-2-3.967 0-6.947 2.991-7 7 .042.976 0 3 0 3-1.885 1.897-4.34 4.353-6 6-2.932 2.944 1.056 6.932 4 4 1.65-1.662 4.113-4.125 6-6 0 0 2.024-.042 3 0z" />
  </StyledIcon>
));

Configure.displayName = 'Configure';

export { Configure };
