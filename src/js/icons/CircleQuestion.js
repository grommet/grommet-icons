import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const CircleQuestion = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CircleQuestion" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-7v-1c0-1 0-1.5 1-2s2-1 2-2.5c0-1-1-2.5-3-2.5s-3 1.264-3 3m3 6v2" />
  </StyledIcon>
));

CircleQuestion.displayName = 'CircleQuestion';

export { CircleQuestion };
