import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Clock = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Clock" {...props}>
    <path fill="#000" d="M13 7a1 1 0 1 0-2 0v5a1 1 0 0 0 .4.8l4 3a1 1 0 0 0 1.2-1.6L13 11.5V7z" /><path fill="#000" fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0z" clipRule="evenodd" />
  </StyledIcon>
));

Clock.displayName = 'Clock';

export { Clock };
