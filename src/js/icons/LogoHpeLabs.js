import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const LogoHpeLabs = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="LogoHpeLabs" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.38623 1H19.3862V16H13.3862V7H11.3862V18H21.3862V20H9.38623V5H15.3862V14H17.3862V3H7.38623V22H15.3862V24H5.38623V1Z"
      fill="#01A982"
    />
  </StyledIcon>
));

LogoHpeLabs.displayName = 'LogoHpeLabs';
export { LogoHpeLabs };
