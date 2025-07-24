import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const HpeLabs = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="HpeLabs" {...props}>
    <polyline fill="none" stroke="#01A982" strokeWidth="2" points="14 23 5 23 5 2 17 2 17 15 13 15 13 6 9 6 9 19 20 19"/>
  </StyledIcon>
));

HpeLabs.displayName = 'HpeLabs';
export { HpeLabs };
