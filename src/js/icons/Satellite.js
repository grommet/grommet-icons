import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Satellite = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Satellite" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M7 17C2.97 12.794 2.97 6.118 7 2l15 15c-4.118 4.03-10.794 4.03-15 0zm0 0c-3.295 0-6 2.95-6 6h12c0-1.139-.37-2.034-1-3m3-11 4-4-4 4zm5.5-8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
  </StyledIcon>
));

Satellite.displayName = 'Satellite';

export { Satellite };
