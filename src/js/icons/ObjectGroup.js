import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ObjectGroup = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ObjectGroup" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 1h3v3H1V1zm19 0h3v3h-3V1zM4 2h16M4 22h16M1 20h3v3H1v-3zm19 0h3v3h-3v-3zM2 4v16M22 4v16M7 7h7v6H7V7zm10 3v7h-7v-2" />
  </StyledIcon>
));

ObjectGroup.displayName = 'ObjectGroup';

export { ObjectGroup };
