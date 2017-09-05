import React from 'react';

import Icon from '../Icon';

const Note = props => (
  <Icon a11yTitle='Note' {...props}>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'><g stroke='#000000' strokeWidth='2'><path d='M1,23 L16,23 L23,16 L23,1 L1,1 L1,23 Z M15,23 L15,15 L23,15' /></g></g>
  </Icon>
);

export default Note;
