import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const TextAlignCenter = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="TextAlignCenter" {...props}>
    <path d="M.46 3.06h23.08v2.18H.46zM4.1 8.29h15.81v2.18H4.1zM.46 13.53h23.08v2.18H.46zm3.64 5.23h15.81v2.18H4.1z" />
  </StyledIcon>
));

TextAlignCenter.displayName = 'TextAlignCenter';

export { TextAlignCenter };
