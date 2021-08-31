import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Filter = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Filter" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m3 6 7 7v8h4v-8l7-7V3H3z" />
  </StyledIcon>
));

Filter.displayName = 'Filter';

export { Filter };
