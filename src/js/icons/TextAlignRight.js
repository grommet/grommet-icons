import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const TextAlignRight = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="TextAlignRight" {...props}>
    <path d="M.46 3.06h23.08v2.18H.46zm7.27 5.23h15.81v2.18H7.73zM.46 13.53h23.08v2.18H.46zm7.27 5.23h15.81v2.18H7.73z" />
  </StyledIcon>
));

TextAlignRight.displayName = 'TextAlignRight';

export { TextAlignRight };
