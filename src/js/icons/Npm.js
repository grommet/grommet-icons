import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Npm = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Npm' {...props}>
      <g fill='none' fillRule='evenodd'><path fill='#D40001' d='M0 0h24v24H0z' /><path fill='#FFF' d='M16.718 7.928h-4.513V20.25H4V3h16v17.249h-3.282V7.93z' /></g>
    </StyledIcon>
  );
});
