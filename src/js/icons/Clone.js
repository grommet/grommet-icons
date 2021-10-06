import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Clone = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Clone" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M7 23h16V7H7v16zM17 4V1h-3M1 14v3h3m-3-5V6v6zM4 1H1v3m5-3h6-6z" />
  </StyledIcon>
));

Clone.displayName = 'Clone';

export { Clone };
