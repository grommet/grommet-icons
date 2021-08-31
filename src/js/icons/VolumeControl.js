import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const VolumeControl = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="VolumeControl" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8 8l3 3m1 11a9.99 9.99 0 0 0 8.307-4.43A9.953 9.953 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12" />
  </StyledIcon>
));

VolumeControl.displayName = 'VolumeControl';

export { VolumeControl };
