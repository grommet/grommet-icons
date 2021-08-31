import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Tag = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Tag" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M11.706 22.294a.992.992 0 0 1-1.41.003l-8.593-8.594a1 1 0 0 1 .003-1.409L13 1h10v10L11.706 22.294zM6 12l6 6M9 9l6 6m2-9a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
  </StyledIcon>
));

Tag.displayName = 'Tag';

export { Tag };
