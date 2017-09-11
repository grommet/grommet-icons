import React from 'react';

import Icon from '../Icon';

const StatusPlaceholder = props => (
  <Icon a11yTitle='StatusPlaceholder' {...props}>
    <rect width='20' height='20' x='2' y='2' fillRule='evenodd' stroke='#000' strokeWidth='2' rx='2' />
  </Icon>
);

export default StatusPlaceholder;
