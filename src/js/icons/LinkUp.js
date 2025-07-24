import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const LinkUp = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="LinkUp" {...props}>
    <path
      d="M12.0001 23C12.5523 22.9999 13.0001 22.5522 13.0001 22V4.41406L19.2931 10.707C19.6836 11.0975 20.3166 11.0975 20.7071 10.707C21.0976 10.3165 21.0976 9.68349 20.7071 9.29297L12.0001 0.585938L3.29307 9.29297C2.90255 9.68349 2.90255 10.3165 3.29307 10.707C3.68361 11.0975 4.31664 11.0975 4.70714 10.707L11.0001 4.41406V22C11.0001 22.5522 11.4479 22.9999 12.0001 23Z"
      fill="#000"
    />
  </StyledIcon>
));

LinkUp.displayName = 'LinkUp';
export { LinkUp };
