import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const LineChart = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="LineChart" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m1 16 7-7 5 5L23 4M0 22h23.999M16 4h7v7" />
  </StyledIcon>
));

LineChart.displayName = 'LineChart';

export { LineChart };
