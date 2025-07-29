import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const HpeLabs = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="HpeLabs" {...props}>
    <path d="M18 1V16H12V7H10V18H20V20H8V5H14V14H16V3H6V22H14V24H4V1H18Z" fill="#01A982"/>
  </StyledIcon>
));

HpeLabs.displayName = 'HpeLabs';
export { HpeLabs };
