import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormSearch = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormSearch" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M13.8 13.8 18 18l-4.2-4.2zM10.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z" />
  </StyledIcon>
));

FormSearch.displayName = 'FormSearch';

export { FormSearch };
