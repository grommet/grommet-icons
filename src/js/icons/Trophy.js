import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Trophy = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Trophy" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 15a6 6 0 0 1-6-6V1h12v8a6 6 0 0 1-6 6zM6 3H1v4c0 2.509 1.791 4 4 4h1V3zm12 8h1c2.209 0 4-1.491 4-4V3h-5v8zM5 23h14v-4H5v4zm11-4a4 4 0 1 0-8 0" />
  </StyledIcon>
));

Trophy.displayName = 'Trophy';

export { Trophy };
