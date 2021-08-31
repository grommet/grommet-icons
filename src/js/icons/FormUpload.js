import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const FormUpload = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="FormUpload" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M6 14.182v3.273h12v-3.273M12 6v8M8.182 9.818 12 6l3.818 3.818" />
  </StyledIcon>
));

FormUpload.displayName = 'FormUpload';

export { FormUpload };
