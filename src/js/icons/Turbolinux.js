import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Turbolinux = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Turbolinux" {...props}>
    <path fill="#528DC4" fillRule="evenodd" d="M9.41886316,6.22224 L9.96581053,7.45268211 L6.61541053,7.45268211 L6,6.22224 L9.41886316,6.22224 Z M13.1110105,12.1706526 L7.09383158,0 L14.1364421,4.17056842 L14.5465895,6.15397895 L17.8971158,6.15397895 L17.1449053,8.20509474 L14.9569895,8.20509474 L16.7346316,16.4785263 L12.5636842,14.4267789 L14.6833895,24 L8.18785263,10.8034105 L13.1110105,12.1706526 Z"/>
  </StyledIcon>
));

Turbolinux.displayName = 'Turbolinux';
export { Turbolinux };
