import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Projects = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Projects" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M9 15v8H1v-8h8zm14 0v8h-8v-8h8zM9 1v8H1V1h8zm14 0v8h-8V1h8z" />
  </StyledIcon>
));

Projects.displayName = 'Projects';

export { Projects };
