import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Group = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Group" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-6 9v-3a6 6 0 1 1 12 0v3M13 5c.404-1.664 2.015-3 4-3 2.172 0 3.98 1.79 4 4-.02 2.21-1.828 4-4 4h-1 1c3.288 0 6 2.686 6 6v2M11 5c-.404-1.664-2.015-3-4-3-2.172 0-3.98 1.79-4 4 .02 2.21 1.828 4 4 4h1-1c-3.288 0-6 2.686-6 6v2" />
  </StyledIcon>
));

Group.displayName = 'Group';

export { Group };
