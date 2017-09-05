import React from 'react';
import deepAssign from 'deep-assign';

import StyledIcon from './StyledIcon';

const Icon = ({ a11yTitle, children, ...rest }, { theme }) => (
  <StyledIcon
    width='24px'
    height='24px'
    viewBox='0 0 24 24'
    version='1.1'
    role='img'
    aria-label={a11yTitle}
    theme={deepAssign({
      icon: {
        color: '#666666',
        size: {
          large: '48px',
          xlarge: '96px',
        },
      },
    }, theme)}
    {...rest}
  >
    {children}
  </StyledIcon>
);

export default Icon;
