import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const DriveCage = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DriveCage" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 23V2h22v21M1 8h22H1zm0 6h22H1zm0 6h22H1zM4 5h12H4zm14 0h2-2zm0 6h2-2zm0 6h2-2zM4 11h12H4zm0 6h12H4z" />
  </StyledIcon>
));

DriveCage.displayName = 'DriveCage';

export { DriveCage };
