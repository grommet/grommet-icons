"use strict";

exports.__esModule = true;
exports.Launch = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Launch = exports.Launch = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Launch"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.9997 6C13.1043 6.00001 13.9997 6.89543 13.9997 8C13.9997 9.10457 13.1043 10 11.9997 10C10.8953 9.99982 9.99969 9.10446 9.99969 8C9.99969 6.89554 10.8953 6.00018 11.9997 6Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9997 0C14.0136 5.51675e-06 15.5106 1.75 16.446 3.80762C17.4224 5.95564 17.9997 8.85329 17.9997 12C17.9997 12.5237 17.982 13.0403 17.9509 13.5479C18.0591 13.6631 18.1988 13.814 18.3581 13.9941C18.733 14.418 19.2279 15.0109 19.694 15.6768C20.1545 16.3345 20.6178 17.106 20.8952 17.8828C21.1633 18.6338 21.326 19.5837 20.8942 20.4473C20.4979 21.2398 19.8179 21.6924 19.1384 21.9395C18.4708 22.1822 17.7478 22.25 17.1247 22.25C16.4932 22.25 15.9066 22.1801 15.4831 22.1123C15.4292 22.1037 15.3777 22.0925 15.3288 22.084C14.4581 23.2166 13.3455 24 11.9997 24C10.6537 23.9999 9.54028 23.2169 8.66961 22.084C8.62117 22.0924 8.57057 22.1038 8.51727 22.1123C8.09364 22.1801 7.50649 22.25 6.87469 22.25C6.25158 22.25 5.5285 22.1822 4.86102 21.9395C4.18163 21.6923 3.50136 21.2397 3.10516 20.4473C2.67347 19.5837 2.83703 18.6337 3.10516 17.8828C3.38254 17.1061 3.84499 16.3345 4.30535 15.6768C4.77132 15.0111 5.26641 14.4179 5.64129 13.9941C5.80068 13.814 5.94025 13.6621 6.04852 13.5469C6.01738 13.0397 5.99969 12.5233 5.99969 12C5.99969 8.85329 6.578 5.95564 7.55438 3.80762C8.48968 1.75017 9.98601 0.000195569 11.9997 0ZM11.9997 2C11.2523 2.00021 10.2489 2.71257 9.37469 4.63574C8.54146 6.46892 7.99969 9.07166 7.99969 12C7.99969 14.9283 8.54146 17.5311 9.37469 19.3643C10.2489 21.2874 11.2523 21.9998 11.9997 22C12.7471 22 13.7514 21.2877 14.6257 19.3643C15.4589 17.5311 15.9997 14.9283 15.9997 12C15.9997 9.07172 15.4589 6.46892 14.6257 4.63574C13.7514 2.71229 12.7471 2.00001 11.9997 2ZM6.37078 16.248C6.2286 16.4317 6.08361 16.6238 5.94403 16.8232C5.52959 17.4153 5.1803 18.0191 4.98895 18.5547C4.78848 19.116 4.82611 19.4164 4.89422 19.5527C4.99792 19.7601 5.19299 19.9327 5.54461 20.0605C5.90818 20.1927 6.37301 20.25 6.87469 20.25C7.1126 20.25 7.34664 20.2355 7.56512 20.2158C7.56155 20.208 7.55793 20.2002 7.55438 20.1924C7.04023 19.0613 6.6377 17.7217 6.37078 16.248ZM17.6286 16.248C17.3617 17.7217 16.9601 19.0613 16.446 20.1924C16.4424 20.2003 16.4379 20.2079 16.4343 20.2158C16.6528 20.2356 16.8866 20.25 17.1247 20.25C17.6263 20.25 18.0912 20.1927 18.4548 20.0605C18.8064 19.9327 19.0014 19.7601 19.1052 19.5527C19.1733 19.4164 19.2119 19.1162 19.0114 18.5547C18.8201 18.0191 18.4698 17.4153 18.0554 16.8232C17.9158 16.6238 17.7708 16.4317 17.6286 16.248Z",
    fill: "#000"
  }));
});
Launch.displayName = 'Launch';