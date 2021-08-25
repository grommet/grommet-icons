import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Cubes = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Cubes" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m6.5 10.5 5.5 3 5.5-3v-6l-5.5-3-5.5 3v6zm0-6 5.5 3 5.5-3m-5.5 3v6-6zm-11 12 5.5 3 5.5-3v-6l-5.5-3-5.5 3v6zm0-6 5.5 3 5.5-3m-5.5 3v6-6zm5.5 3 5.5 3 5.5-3v-6l-5.5-3-5.5 3v6zm0-6 5.5 3 5.5-3m-5.5 3v6-6z" />
  </StyledIcon>
));

Cubes.displayName = 'Cubes';

export { Cubes };
