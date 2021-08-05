import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Descending = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Descending' {...props}>
      <path fillRule='evenodd' clipRule='evenodd' d='m11.92 16.714-.354.353-.354-.353L7 12.502l.707-.708 3.359 3.359V7h1v8.153l3.358-3.359.707.708-4.212 4.212z' fill='#000' />
    </StyledIcon>
  );
});
