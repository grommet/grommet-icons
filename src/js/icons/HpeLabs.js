import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const HpeLabs = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="HpeLabs" {...props}>
    <path fill="none" stroke="#01A982" strokeWidth="2" d="M14 23H5V2h12v13h-4V6H9v13h11" />
  </StyledIcon>
));

HpeLabs.displayName = 'HpeLabs';

export { HpeLabs };
