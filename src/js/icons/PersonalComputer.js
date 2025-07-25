import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const PersonalComputer = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="PersonalComputer" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M18.9991 2C20.1037 2 20.9991 2.89543 20.9991 4V14.7637L23.17 19.1055L23.2276 19.2305C23.7744 20.5312 22.8222 21.9997 21.3819 22H2.61728C1.13101 21.9995 0.164574 20.435 0.82919 19.1055L2.99911 14.7656V4C2.99911 2.89573 3.89495 2.00048 4.99911 2H18.9991ZM2.61728 20H8.99911C8.99911 19.448 9.44723 19.0005 9.99911 19H13.9991L14.1017 19.0049C14.606 19.056 14.9991 19.4822 14.9991 20H21.3819L19.3819 16H4.61728L2.61728 20ZM4.99911 14H18.9991V4H4.99911V14Z" fill="#555555"/>
  </StyledIcon>
));

PersonalComputer.displayName = 'PersonalComputer';
export { PersonalComputer };
