import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const LocationPin = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="LocationPin" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 0v12" />
  </StyledIcon>
));

LocationPin.displayName = 'LocationPin';

export { LocationPin };
