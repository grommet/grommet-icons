import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Rss = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Rss" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M22 21C22 10.507 13.493 2 3 2m14 19c0-7.732-6.268-14-14-14m9 14a9 9 0 0 0-9-9m1 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </StyledIcon>
));

Rss.displayName = 'Rss';

export { Rss };
