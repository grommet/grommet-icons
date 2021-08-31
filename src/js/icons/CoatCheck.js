import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const CoatCheck = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CoatCheck" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12 11 10.155 6.462c.467.297.845.981.845 1.547v1.982A1 1 0 0 1 21.998 22H2.002A1 1 0 0 1 1 20.99v-1.98c0-.558.379-1.251.845-1.548L12 11zm3-6a3 3 0 0 0-6 0c0 .932.411 1.802 1.09 2.314C11 8 12 8 12 9.5V11" />
  </StyledIcon>
));

CoatCheck.displayName = 'CoatCheck';

export { CoatCheck };
