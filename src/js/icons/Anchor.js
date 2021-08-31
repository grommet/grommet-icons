import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Anchor = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Anchor" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8-11v15m-8-5.027C6.194 19.324 8.86 21 12 21c3.14 0 5.807-1.676 8-5.027M16 10H8" />
  </StyledIcon>
));

Anchor.displayName = 'Anchor';

export { Anchor };
