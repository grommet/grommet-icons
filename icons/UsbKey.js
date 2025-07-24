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
    d: "M16.1025 5.28174C16.6067 5.33307 17 5.75918 17 6.27686V7.27686H23L23.1025 7.28174C23.6067 7.33307 24 7.75918 24 8.27686V16.2769C24 16.8291 23.5523 17.2769 23 17.2769H17V18.2769C17 18.8291 16.5523 19.2769 16 19.2769H5C2.23858 19.2769 0 17.0383 0 14.2769V10.2769C0 7.51543 2.23858 5.27686 5 5.27686H16L16.1025 5.28174ZM5 7.27686C3.34315 7.27686 2 8.62 2 10.2769V14.2769C2 15.9337 3.34315 17.2769 5 17.2769H15V7.27686H5ZM17 15.2769H22V9.27686H17V15.2769Z",
    fill: "#000"
  }));
});
UsbKey.displayName = 'UsbKey';