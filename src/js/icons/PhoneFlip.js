import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const PhoneFlip = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="PhoneFlip" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M8 1a1 1 0 0 0-.928.629l-4 10a1 1 0 0 0 0 .742l4 10A1 1 0 0 0 8 23h10a1 1 0 0 0 .928-1.371L15.078 12l3.851-9.629A1 1 0 0 0 18 1H8zM5.477 11l3.2-8h2.794a1 1 0 0 0 1 1h.057a1 1 0 0 0 1.001-1h2.994l-3.2 8H5.477zm0 2 3.2 8h7.846l-3.2-8H5.477zm5.558 6.773a1 1 0 0 1 .937-1.351h.056a1 1 0 1 1 0 2h-.056a1 1 0 0 1-.937-.649z" fill="#000" />
  </StyledIcon>
));

PhoneFlip.displayName = 'PhoneFlip';

export { PhoneFlip };
