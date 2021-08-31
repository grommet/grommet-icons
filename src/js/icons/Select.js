import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Select = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Select" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M8 1h6-6zm11.188 18.472L16 22l-3.5-4.5-3 3.5L7 7l13 6.5-4.5 1.5 3.688 4.472zM19 4V1h-3M6 1H3v3m0 10v3h3M19 6v4-4zM3 12V6v6z" />
  </StyledIcon>
));

Select.displayName = 'Select';

export { Select };
