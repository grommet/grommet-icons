import React from 'react';

import Icon from '../Icon';

const Star = props => (
  <Icon a11yTitle='Star' {...props}>
    <polygon fill='none' stroke='#000' strokeWidth='2' points='5 21 8 14 3 9 9 9 12 3 15 9 21 9 16 14 19 21 12 17' />
  </Icon>
);

export default Star;
