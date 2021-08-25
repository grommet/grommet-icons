import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Unsorted = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Unsorted" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="m15.204 15.321 1.597-1.597.707.707-2.45 2.45-.354.354-.353-.353-2.45-2.45.707-.708 1.596 1.597V7.217h1v8.104zm-5.9-6.407v8.104h1V8.914l1.597 1.597.707-.707-2.45-2.45L9.803 7l-.354.354L7 9.804l.707.707 1.597-1.597z" fill="#000" />
  </StyledIcon>
));

Unsorted.displayName = 'Unsorted';

export { Unsorted };
