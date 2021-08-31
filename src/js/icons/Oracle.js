import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Oracle = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Oracle" {...props}>
    <path fill="red" fillRule="evenodd" d="M7.957 18.912A6.953 6.953 0 0 1 1 11.962 6.963 6.963 0 0 1 7.957 5h8.087A6.961 6.961 0 0 1 23 11.962a6.952 6.952 0 0 1-6.956 6.95H7.957zm7.907-2.453a4.497 4.497 0 0 0 4.503-4.497 4.507 4.507 0 0 0-4.503-4.508H8.136a4.507 4.507 0 0 0-4.503 4.508 4.498 4.498 0 0 0 4.503 4.497h7.728z" />
  </StyledIcon>
));

Oracle.displayName = 'Oracle';

export { Oracle };
