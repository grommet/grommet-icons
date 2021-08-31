import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const StatusGoodSmall = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 12 12" a11yTitle="StatusGoodSmall" {...props}>
    <circle cx="6" cy="6" r="5" fillRule="evenodd" stroke="#000" />
  </StyledIcon>
));

StatusGoodSmall.displayName = 'StatusGoodSmall';

export { StatusGoodSmall };
