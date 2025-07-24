function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StatusGood = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StatusGood"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.1523 7.92334C15.4451 7.45528 16.0621 7.31332 16.5303 7.60596C16.9983 7.89876 17.1403 8.51567 16.8477 8.98389L11.8477 16.9839C11.6861 17.2421 11.4159 17.4123 11.1133 17.4468C10.8105 17.4813 10.5085 17.3761 10.293 17.1606L7.29297 14.1606C6.90244 13.7701 6.90244 13.1371 7.29297 12.7466C7.68349 12.3561 8.31651 12.3561 8.70703 12.7466L10.8174 14.8569L15.1523 7.92334Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1.45361C18.0751 1.45361 23 6.37848 23 12.4536C23 18.5287 18.0751 23.4536 12 23.4536C5.92487 23.4536 1 18.5287 1 12.4536C1 6.37848 5.92487 1.45361 12 1.45361ZM12 3.45361C7.02944 3.45361 3 7.48305 3 12.4536C3 17.4242 7.02944 21.4536 12 21.4536C16.9706 21.4536 21 17.4242 21 12.4536C21 7.48305 16.9706 3.45361 12 3.45361Z",
    fill: "#000"
  }));
});
StatusGood.displayName = 'StatusGood';
export { StatusGood };