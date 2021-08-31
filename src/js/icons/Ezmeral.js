import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Ezmeral = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 48 24" a11yTitle="Ezmeral" {...props}>
    <path d="M7 8h34v8H7V8z" fill="#01A982" /><path d="M1 8h6v8H1V8zm40 0h6v8h-6V8zM7 16h34v6H7v-6z" fill="#00775B" /><path d="M7 2h34v6H7V2z" fill="#00C781" /><path d="m1 8 6-6v6H1zm0 8 6 6v-6H1zm46-8-6-6v6h6zm0 8-6 6v-6h6z" fill="#01A982" />
  </StyledIcon>
));

Ezmeral.displayName = 'Ezmeral';

export { Ezmeral };
