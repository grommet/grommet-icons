import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Npm = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Npm" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M24 24H0V0H24V24ZM4 3V20.249H12.2051V7.92871H16.7178V20.249H20V3H4Z" fill="#D40001"/>
  </StyledIcon>
));

Npm.displayName = 'Npm';
export { Npm };
