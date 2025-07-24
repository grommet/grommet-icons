import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const TopCorner = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="TopCorner" {...props}>
    <path d="M22 1C22.5523 1 23 1.44772 23 2C23 2.55228 22.5523 3 22 3H3V22C3 22.5523 2.55228 23 2 23C1.44772 23 1 22.5523 1 22V2L1.00488 1.89746C1.05621 1.39333 1.48232 1 2 1H22Z" fill="#555555"/>
  </StyledIcon>
));

TopCorner.displayName = 'TopCorner';
export { TopCorner };
