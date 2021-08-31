import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const VirtualStorage = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="VirtualStorage" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 22c4.97 0 9-2.239 9-5s-4.03-5-9-5-9 2.239-9 5 4.03 5 9 5zm0-4.5c4.97 0 9-2.239 9-5s-4.03-5-9-5-9 2.239-9 5 4.03 5 9 5zm0-5.5c4.97 0 9-2.239 9-5s-4.03-5-9-5-9 2.239-9 5 4.03 5 9 5z" />
  </StyledIcon>
));

VirtualStorage.displayName = 'VirtualStorage';

export { VirtualStorage };
