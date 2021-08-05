import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Cpu = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Cpu' {...props}>
      <path fillRule='evenodd' clipRule='evenodd' d='M9 3H7V1H5v2a2 2 0 0 0-2 2H1v2h2v2H1v2h2v2H1v2h2v2H1v2h2a2 2 0 0 0 2 2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2a2 2 0 0 0 2-2h2v-2h-2v-2h2v-2h-2v-2h2V9h-2V7h2V5h-2a2 2 0 0 0-2-2V1h-2v2h-2V1h-2v2h-2V1H9v2zM5 5h14v14H5V5zm8 1h-1v6h6V6h-5zm1 2h2v2h-2V8z' fill='#000' />
    </StyledIcon>
  );
});
