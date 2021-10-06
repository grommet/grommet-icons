import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const TestDesktop = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="TestDesktop" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M18.218 1H23v18H1V1h5m11 9c-4-3-6 3-10 0M5 23h14H5zm5-22v4.773l-5 7.182V15h14v-2.045l-5-7.182V1M8 1h8-8zm0 22h8v-4H8v4z" />
  </StyledIcon>
));

TestDesktop.displayName = 'TestDesktop';

export { TestDesktop };
