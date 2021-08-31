import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const LinkTop = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="LinkTop" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 5v18M4 13l8-8 8 8M2 2h20" />
  </StyledIcon>
));

LinkTop.displayName = 'LinkTop';

export { LinkTop };
