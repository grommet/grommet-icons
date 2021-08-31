import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const LinkBottom = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="LinkBottom" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 19V1M4 11l8 8 8-8M2 22h20" />
  </StyledIcon>
));

LinkBottom.displayName = 'LinkBottom';

export { LinkBottom };
