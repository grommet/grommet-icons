import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const LogoGrommet = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="LogoGrommet" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M0.38623 12C0.38623 5.38043 5.76666 0 12.3862 0C19.0058 0 24.3862 5.38043 24.3862 12C24.3862 18.6196 19.0058 24 12.3862 24C5.76666 24 0.38623 18.6196 0.38623 12ZM12.3862 4C7.9758 4 4.38623 7.58957 4.38623 12C4.38623 16.4104 7.9758 20 12.3862 20C16.7967 20 20.3862 16.4104 20.3862 12C20.3862 7.58957 16.7967 4 12.3862 4Z" fill="#865CD6"/>
  </StyledIcon>
));

LogoGrommet.displayName = 'LogoGrommet';
export { LogoGrommet };
