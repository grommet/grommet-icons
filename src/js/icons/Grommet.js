import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Grommet = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Grommet" {...props}>
    <path
      d="M20 12C20 7.58957 16.4104 4 12 4C7.58957 4 4 7.58957 4 12C4 16.4104 7.58957 20 12 20C16.4104 20 20 16.4104 20 12ZM24 12C24 18.6196 18.6196 24 12 24C5.38043 24 0 18.6196 0 12C0 5.38043 5.38043 0 12 0C18.6196 0 24 5.38043 24 12Z"
      fill="#865CD6"
    />
  </StyledIcon>
));

Grommet.displayName = 'Grommet';
export { Grommet };
