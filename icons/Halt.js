"use strict";

exports.__esModule = true;
exports.Halt = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Halt = exports.Halt = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Halt"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5 0C14.7301 0.00017719 15.7507 0.889251 15.959 2.05957C16.1331 2.02113 16.3143 2.00003 16.5 2C17.7301 2.00018 18.7507 2.88925 18.959 4.05957C19.1331 4.02113 19.3143 4.00003 19.5 4C20.8805 4.0002 22 5.11941 22 6.5V18C22 20.7613 19.7612 22.9998 17 23H11.4228C9.99892 23 8.64735 22.3929 7.70213 21.3398L7.51854 21.123L6.71971 20.125L3.07713 15.6729C2.26905 14.6849 2.34069 13.2453 3.24315 12.3428C4.21352 11.3726 5.7875 11.3725 6.7578 12.3428L7.99998 13.585V4.5C7.99998 3.11942 9.11945 2.00021 10.5 2C10.6856 2.00003 10.867 2.02119 11.041 2.05957C11.2492 0.889222 12.2699 0.000184139 13.5 0ZM13.5 2C13.224 2.00021 13 2.22399 13 2.5V12H11V4.5L10.9902 4.39941C10.9437 4.1716 10.7415 4.00017 10.5 4C10.224 4.00021 9.99998 4.22399 9.99998 4.5V15.7393C9.99999 16.7262 8.80735 17.2202 8.10936 16.5225L5.34276 13.7568C5.15349 13.5679 4.84644 13.5678 4.65721 13.7568C4.48134 13.9328 4.46765 14.2136 4.62498 14.4062L8.2744 18.8672L8.28123 18.875L9.08006 19.874L9.19041 20.0039C9.75754 20.6357 10.5685 21 11.4228 21H17C18.6567 20.9998 20 19.6567 20 18V6.5C20 6.22398 19.776 6.0002 19.5 6C19.224 6.00021 19 6.22399 19 6.5V12H17V4.5C17 4.22398 16.776 4.0002 16.5 4C16.224 4.00021 16 4.22399 16 4.5V12H14V2.5C14 2.22398 13.776 2.0002 13.5 2Z",
    fill: "#000"
  }));
});
Halt.displayName = 'Halt';