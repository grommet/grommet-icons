function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Cube = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Cube"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.76367 1.00051C11.1713 0.296706 12.8287 0.296706 14.2363 1.00051L20.2363 4.00051C21.93 4.84753 23 6.5785 23 8.47219V15.5279C23 17.4217 21.9302 19.1535 20.2363 20.0005L14.2363 23.0005C12.8287 23.7043 11.1713 23.7043 9.76367 23.0005L3.76367 20.0005C2.06978 19.1535 1 17.4217 1 15.5279V8.47219C1.00002 6.5785 2.07 4.84753 3.76367 4.00051L9.76367 1.00051ZM3.10938 7.67238C3.03828 7.92929 3.00001 8.19781 3 8.47219V15.5279C3 16.6641 3.64188 17.7033 4.6582 18.2114L10.6582 21.2114C10.7697 21.2672 10.884 21.315 11 21.356V11.6177L3.10938 7.67238ZM13 11.6177V21.356C13.116 21.315 13.2303 21.2672 13.3418 21.2114L19.3418 18.2114C20.3581 17.7033 21 16.6641 21 15.5279V8.47219C21 8.19772 20.9608 7.92936 20.8896 7.67238L13 11.6177ZM13.3418 2.78859C12.4972 2.36632 11.5028 2.36632 10.6582 2.78859L4.6582 5.78859C4.52302 5.85618 4.39474 5.93372 4.27344 6.01906L12 9.88234L19.7256 6.01906C19.6045 5.9339 19.4767 5.85606 19.3418 5.78859L13.3418 2.78859Z",
    fill: "#000"
  }));
});
Cube.displayName = 'Cube';
export { Cube };