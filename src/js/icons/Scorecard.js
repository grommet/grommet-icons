import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Scorecard = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Scorecard" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M9 18v-6m3 6v-5m3 5v-8m2-7h4v20H3V3h4m0-2h10v4H7V1z" />
  </StyledIcon>
));

Scorecard.displayName = 'Scorecard';

export { Scorecard };
