import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ClosedCaption = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="ClosedCaption" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M1 12c0-7 1.5-8 11-8s11 1 11 8-1.5 8-11 8-11-1-11-8zm4.25 2c0 1.5.75 2 2.5 2s2.5-.5 2.5-2h-.271c0 1.25-1 2-2.229 2-1.23 0-2.229-.75-2.229-2v-4C5.5 8.75 6.5 8 7.75 8s2.25.75 2.229 2h.271c0-1.25-1.021-2-2.5-2s-2.5.75-2.5 2v4zm8 0c0 1.5.75 2 2.5 2s2.5-.5 2.5-2h-.271c0 1.25-1 2-2.229 2-1.23 0-2.229-.75-2.229-2v-4c-.021-1.25.979-2 2.229-2s2.25.75 2.229 2h.271c0-1.25-1.021-2-2.5-2s-2.5.75-2.5 2v4z" />
  </StyledIcon>
));

ClosedCaption.displayName = 'ClosedCaption';

export { ClosedCaption };
