import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const TapeOption = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="TapeOption" {...props}>
    <path
      d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12V8H3V12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3H5C4.44772 3 4 2.55228 4 2C4 1.44772 4.44772 1 5 1H12Z"
      fill="#000"
    />
    <path
      d="M12 4C16.4182 4 20 7.58181 20 12C20 16.4182 16.4182 20 12 20C7.58181 20 4 16.4182 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12C6 15.3136 8.68638 18 12 18C15.3136 18 18 15.3136 18 12C18 8.68638 15.3136 6 12 6H2C1.44772 6 1 5.55228 1 5C1 4.44772 1.44772 4 2 4H12Z"
      fill="#000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 8C14.2068 8 16 9.79321 16 12C16 14.2068 14.2068 16 12 16C9.79321 16 8 14.2068 8 12C8 9.79321 9.79321 8 12 8ZM12 10C10.8978 10 10 10.8978 10 12C10 13.1022 10.8978 14 12 14C13.1022 14 14 13.1022 14 12C14 10.8978 13.1022 10 12 10Z"
      fill="#000"
    />
  </StyledIcon>
));

TapeOption.displayName = 'TapeOption';
export { TapeOption };
