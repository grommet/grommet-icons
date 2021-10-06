import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Escalator = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Escalator" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeWidth="2" d="M22 9a2 2 0 0 0-1.998-2H16L6 17H4c-1.105 0-2 .888-2 2h0a2 2 0 0 0 1.998 2H8l10-10h2c1.105 0 2-.888 2-2h0zM7 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 6v-2.505c0-.273.232-.495.5-.495h0c.276 0 .5.214.5.505V14l-1 1zm5-11a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 6V7.495c0-.273.232-.495.5-.495h0c.276 0 .5.214.5.505V9l-1 1z" />
  </StyledIcon>
));

Escalator.displayName = 'Escalator';

export { Escalator };
