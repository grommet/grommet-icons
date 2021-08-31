import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Mastercard = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Mastercard" {...props}>
    <g fill="none" fillRule="evenodd"><circle cx="7" cy="12" r="7" fill="#EA001B" /><circle cx="17" cy="12" r="7" fill="#FFA200" fillOpacity=".8" /></g>
  </StyledIcon>
));

Mastercard.displayName = 'Mastercard';

export { Mastercard };
