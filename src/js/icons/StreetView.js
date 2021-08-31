import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const StreetView = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="StreetView" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M16 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-1 18v-6h3v-2c0-3.34-2.76-5.97-6-6-3.21.03-6 2.66-6 6v2h3v6m-5.5 0h17-17z" />
  </StyledIcon>
));

StreetView.displayName = 'StreetView';

export { StreetView };
