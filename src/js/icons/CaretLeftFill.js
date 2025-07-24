import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const CaretLeftFill = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CaretLeftFill" {...props}>
    <path d="M18.0001 19.5858C17.9999 21.3674 15.846 22.2595 14.5861 20.9999L7.00013 13.414C6.2191 12.6329 6.21913 11.3669 7.00013 10.5858L14.5861 2.9999C15.846 1.74013 18.0001 2.63224 18.0001 4.41396V19.5858Z" fill="#555555"/>
  </StyledIcon>
));

CaretLeftFill.displayName = 'CaretLeftFill';
export { CaretLeftFill };
