import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const TextWrap = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="TextWrap" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M17 10h7-7zM1 14h13V2H1v12zm5-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m11 0h7-7zm0-4h7-7zm0 12h7-7zM0 18h24H0zm0 4h24H0zm14-8v-1l-4-5-3 3-1-1-4 4h12z" />
  </StyledIcon>
));

TextWrap.displayName = 'TextWrap';

export { TextWrap };
