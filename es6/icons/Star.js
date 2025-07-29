function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Star = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Star"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 1C12.4303 1 12.812 1.27541 12.9482 1.68359L15.2207 8.5H22C22.4303 8.5 22.812 8.77541 22.9482 9.18359C23.0844 9.59194 22.944 10.0415 22.5996 10.2998L17.1992 14.3496L19.9365 21.6484C20.093 22.0657 19.9543 22.5368 19.5967 22.8027C19.239 23.0686 18.748 23.066 18.3936 22.7959L12 17.9248L5.60644 22.7959C5.25195 23.066 4.76098 23.0686 4.40332 22.8027C4.04565 22.5368 3.90699 22.0657 4.06347 21.6484L6.7998 14.3496L1.40039 10.2998C1.05604 10.0415 0.915641 9.59194 1.05176 9.18359C1.18795 8.77541 1.56967 8.5 2 8.5H8.77929L11.0518 1.68359L11.1133 1.53711C11.2835 1.2108 11.6233 1 12 1ZM10.4482 9.81641C10.312 10.2246 9.93033 10.5 9.5 10.5H4.99902L8.59961 13.2002C8.95489 13.4667 9.09245 13.9357 8.93652 14.3516L7.15527 19.0986L11.3936 15.8711C11.7515 15.5984 12.2485 15.5984 12.6064 15.8711L16.8437 19.0986L15.0635 14.3516C14.9075 13.9357 15.0451 13.4667 15.4004 13.2002L19.001 10.5H14.5C14.0697 10.5 13.688 10.2246 13.5518 9.81641L12 5.16113L10.4482 9.81641Z",
    fill: "#000"
  }));
});
Star.displayName = 'Star';
export { Star };