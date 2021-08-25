import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Actions = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Actions" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0-11V1m0 22v-5.5M1 12h5.5m11 0H23M4.437 4.437l4.125 4.125m6.876 6.876 4.124 4.124m0-15.125-4.125 4.125m-6.874 6.876-4.126 4.124" />
  </StyledIcon>
));

Actions.displayName = 'Actions';

export { Actions };
