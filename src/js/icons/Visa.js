import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Visa = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Visa" {...props}>
    <path fill="#1A1F71" fillRule="evenodd" d="M5.756 6.342C4.344 5.56 2.733 4.93.931 4.494l.059-.35h7.407c.997.036 1.804.355 2.082 1.422l1.61 7.743v.001l.48 2.335 4.497-11.491h4.865L14.7 20.974l-4.86.005L5.756 6.342z" />
  </StyledIcon>
));

Visa.displayName = 'Visa';

export { Visa };
