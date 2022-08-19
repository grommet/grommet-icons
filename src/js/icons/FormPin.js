import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormPin = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormPin" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="m4 19 4.455-4.454M12.273 5 18 10.727m-4.454-4.454L9.727 10.09s-2.545-.636-4.454 1.273l6.363 6.363c1.91-1.909 1.273-4.454 1.273-4.454l3.818-3.818-3.181-3.182Z" />
  </StyledIcon>
));

FormPin.displayName = 'FormPin';

export { FormPin };
