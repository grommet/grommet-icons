import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Linkedin = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Linkedin" {...props}>
    <path fill="#0077B5" fillRule="evenodd" d="M20.452 20.45h-3.56v-5.57c0-1.328-.022-3.036-1.85-3.036-1.851 0-2.134 1.447-2.134 2.942v5.664H9.352V8.997h3.413v1.566h.049c.475-.9 1.636-1.85 3.367-1.85 3.605 0 4.27 2.371 4.27 5.456v6.281zM5.339 7.433a2.063 2.063 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zM7.12 20.45H3.558V8.997H7.12V20.45zM23 0H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" />
  </StyledIcon>
));

Linkedin.displayName = 'Linkedin';

export { Linkedin };
