"use strict";

exports.__esModule = true;
exports.Analytics = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Analytics = exports.Analytics = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Analytics"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.082 0.0449219L13.4014 0.0751953C16.6951 0.429926 19.6241 2.01876 21.7119 4.36035C22.3907 5.12197 22.3103 6.18066 21.7334 6.87793C22.5388 8.40718 23 10.1513 23 12C23 18.0723 18.0723 23 12 23C5.92772 23 1 18.0723 1 12C1.00003 6.17822 5.5298 1.41192 11.2549 1.02832C11.57 0.464113 12.1525 0.0577736 12.8623 0.0380859L13.082 0.0449219ZM11 3.05664C6.50236 3.55471 3.00003 7.37036 3 12C3 16.9677 7.03228 21 12 21C16.9677 21 21 16.9677 21 12C21 10.623 20.6867 9.31754 20.1328 8.14941L14.2002 12.5996C12.8817 13.5885 11 12.6481 11 11V3.05664ZM13 11L20.1602 5.62891C18.3539 3.63422 15.8286 2.30281 13 2.04688V11Z",
    fill: "#000"
  }));
});
Analytics.displayName = 'Analytics';