"use strict";

exports.__esModule = true;
exports.UsbKey = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var UsbKey = exports.UsbKey = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UsbKey"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.1025 5.00488C16.6067 5.05621 17 5.48232 17 6V7H23L23.1025 7.00488C23.6067 7.05621 24 7.48232 24 8V16C24 16.5523 23.5523 17 23 17H17V18C17 18.5523 16.5523 19 16 19H5C2.23858 19 0 16.7614 0 14V10C0 7.23858 2.23858 5 5 5H16L16.1025 5.00488ZM5 7C3.34315 7 2 8.34315 2 10V14C2 15.6569 3.34315 17 5 17H15V7H5ZM17 15H22V9H17V15Z",
    fill: "#000"
  }));
});
UsbKey.displayName = 'UsbKey';