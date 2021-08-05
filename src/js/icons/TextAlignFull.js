import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const TextAlignFull = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='TextAlignFull' {...props}>
      <path d='M.46 3.06h23.08v2.18H.46zm0 5.23h23.08v2.18H.46zm0 5.24h23.08v2.18H.46zm0 5.23h15.81v2.18H.46z' />
    </StyledIcon>
  );
});
