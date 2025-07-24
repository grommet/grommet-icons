function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Rewind = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Rewind"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.4141 2.68947C21.7184 2.46968 22.1208 2.43859 22.4551 2.60939C22.7894 2.78035 23 3.12451 23 3.50002V20C23 20.3688 22.7968 20.7078 22.4717 20.8819C22.1466 21.0558 21.7521 21.0366 21.4453 20.8321L14 15.8682V20C14 20.3761 13.7892 20.7209 13.4541 20.8916C13.119 21.0623 12.7163 21.0298 12.4121 20.8086L1.41211 12.8086C1.15338 12.6204 1 12.3199 1 12C1.00002 11.6801 1.15338 11.3796 1.41211 11.1914L12.4121 3.19143C12.7163 2.9703 13.119 2.93778 13.4541 3.10842C13.7892 3.2791 14 3.62394 14 4.00002V8.04396L21.4141 2.68947ZM13.5859 10.8106C13.2816 11.0304 12.8792 11.0615 12.5449 10.8906C12.2106 10.7197 12 10.3755 12 10V5.96291L3.69922 12L12 18.0362V14C12 13.6312 12.2032 13.2922 12.5283 13.1182C12.8534 12.9443 13.2479 12.9635 13.5547 13.168L21 18.1309V5.4551L13.5859 10.8106Z",
    fill: "#000"
  }));
});
Rewind.displayName = 'Rewind';
export { Rewind };