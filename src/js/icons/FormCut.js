import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormCut = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormCut" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m18 7.524-7.857 6.286L18 7.524zm0 8.38L10.143 9.62 18 15.905zm-9.429-5.761a1.571 1.571 0 1 0 0-3.143 1.571 1.571 0 0 0 0 3.143zm0 6.286a1.571 1.571 0 1 0 0-3.143 1.571 1.571 0 0 0 0 3.143z" />
  </StyledIcon>
));

FormCut.displayName = 'FormCut';

export { FormCut };
