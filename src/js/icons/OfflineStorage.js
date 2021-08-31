import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const OfflineStorage = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="OfflineStorage" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 1 0 0 18zm8-12h-8a3 3 0 0 0 0 6h8" />
  </StyledIcon>
));

OfflineStorage.displayName = 'OfflineStorage';

export { OfflineStorage };
