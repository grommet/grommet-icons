import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Twitch = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Twitch" {...props}>
    <path fill="#6441A5" fillRule="evenodd" d="m16.673 16.163 3.43-3.429V1.959H3.939v14.204h4.408v2.939l2.94-2.939h5.386ZM1 3.92 1.98 0h20.08v13.715l-7.836 7.835h-3.917L7.857 24H5.409v-2.45H1V3.92Zm10.286 7.836h-1.96V5.877h1.96v5.878Zm5.387 0h-1.959V5.877h1.96v5.878Z" clipRule="evenodd"/>
  </StyledIcon>
));

Twitch.displayName = 'Twitch';
export { Twitch };
