import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const Semantics = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Semantics" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M21 1C21.276 1.00001 21.5395 1.1143 21.7285 1.31543C21.9175 1.51662 22.0153 1.78699 21.998 2.0625L20.998 18.0625C20.9758 18.4181 20.766 18.7352 20.4473 18.8945L12.4473 22.8945C12.1657 23.0353 11.8343 23.0353 11.5527 22.8945L3.55273 18.8945C3.234 18.7352 3.02422 18.4181 3.00194 18.0625L2.00194 2.0625C1.98473 1.78699 2.08247 1.51662 2.27148 1.31543C2.46048 1.1143 2.72399 1 2.99999 1H21ZM4.96191 17.3623L12 20.8818L19.0371 17.3623L19.9355 3H4.06444L4.96191 17.3623Z" fill="#555555"/>
  </StyledIcon>
));

Semantics.displayName = 'Semantics';
export { Semantics };
