import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Music = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Music" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 17.998C1 16.894 1.887 16 2.998 16H9v4.002A1.993 1.993 0 0 1 7.002 22H2.998A2 2 0 0 1 1 20.002v-2.004zm14 0c0-1.104.887-1.998 1.998-1.998H23v4.002A1.993 1.993 0 0 1 21.002 22h-4.004A2 2 0 0 1 15 20.002v-2.004zM9 16V2h14v13.5M9 6h14" />
  </StyledIcon>
));

Music.displayName = 'Music';

export { Music };
