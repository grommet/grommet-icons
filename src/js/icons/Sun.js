import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Sun = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Sun" {...props}>
    <path stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.657-5.657L19.07 4.93M4.93 19.07l1.414-1.414m0-11.314L4.93 4.93m14.14 14.14-1.414-1.414M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
  </StyledIcon>
));

Sun.displayName = 'Sun';

export { Sun };
