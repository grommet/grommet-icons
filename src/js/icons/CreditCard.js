import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const CreditCard = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CreditCard" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 5c0-.552.44-1 1.002-1h19.996A1 1 0 0 1 23 5v14c0 .552-.44 1-1.002 1H2.002A1 1 0 0 1 1 19V5zm0 3h22v2H1V8zm4 7h2v.5H5V15zm5 0h6v.5h-6V15z" />
  </StyledIcon>
));

CreditCard.displayName = 'CreditCard';

export { CreditCard };
