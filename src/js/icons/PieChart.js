import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const PieChart = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="PieChart" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M10 23a9 9 0 0 1 0-18v9l1.162 1.162 5.202 5.202A8.972 8.972 0 0 1 10 23zm4-13V1a9 9 0 0 1 9 9h-9zm0 3h8a8.964 8.964 0 0 1-2.107 5.787L14 13z" />
  </StyledIcon>
));

PieChart.displayName = 'PieChart';

export { PieChart };
