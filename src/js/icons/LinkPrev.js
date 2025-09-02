import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const LinkLeft = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="LinkLeft" {...props}>
    <path d="M9.29297 3.29301C9.68349 2.90249 10.3165 2.90249 10.707 3.29301C11.0975 3.68354 11.0975 4.31656 10.707 4.70708L4.41406 11H22C22.5522 11.0001 22.9999 11.4478 23 12C23 12.5523 22.5523 13 22 13H4.41406L10.707 19.293C11.0975 19.6835 11.0975 20.3166 10.707 20.7071C10.3165 21.0976 9.68348 21.0976 9.29297 20.7071L0.585938 12L9.29297 3.29301Z" fill="#555555"/>
  </StyledIcon>
));

LinkLeft.displayName = 'LinkLeft';
export { LinkLeft };
