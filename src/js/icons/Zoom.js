import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Zoom = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Zoom" {...props}>
    <path d="M0 8a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8z" fill="#3984FD" /><path d="M5 9a1 1 0 0 1 1-1h6a3 3 0 0 1 3 3v4a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3V9zm10.5 2.752a2 2 0 0 1 .495-1.318l1.69-1.932c.457-.52 1.315-.198 1.315.494v6.008c0 .693-.858 1.015-1.314.494l-1.691-1.932a2 2 0 0 1-.495-1.317v-.498z" fill="#fff" />
  </StyledIcon>
));

Zoom.displayName = 'Zoom';

export { Zoom };
