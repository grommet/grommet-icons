import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const DownloadOption = forwardRef((props, ref) => (
  <StyledIcon
    ref={ref}
    viewBox="0 0 24 24"
    a11yTitle="DownloadOption"
    {...props}
  >
    <path
      d="M12 6C12.5523 6 13 6.44772 13 7V14.5859L15.293 12.293C15.6835 11.9024 16.3165 11.9024 16.707 12.293C17.0976 12.6835 17.0976 13.3165 16.707 13.707L12.707 17.707C12.3165 18.0976 11.6835 18.0976 11.293 17.707L7.29297 13.707C6.90244 13.3165 6.90244 12.6835 7.29297 12.293C7.68349 11.9024 8.31651 11.9024 8.70703 12.293L11 14.5859V7C11 6.44772 11.4477 6 12 6Z"
      fill="#000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
      fill="#000"
    />
  </StyledIcon>
));

DownloadOption.displayName = 'DownloadOption';
export { DownloadOption };
