"use strict";

exports.__esModule = true;
exports.Onedrive = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Onedrive = exports.Onedrive = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Onedrive"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#4F8AD8",
    fillRule: "evenodd",
    d: "M21.692 13.987a2.733 2.733 0 0 1 .602 5.232h-13.7a3.166 3.166 0 1 1 .281-6.321 3.963 3.963 0 0 1 7.482-2.05 3.454 3.454 0 0 1 5.336 3.138zM8.187 12.209a3.873 3.873 0 0 0-3.44 3.843c0 .81.252 1.563.681 2.186h-2.15a3.279 3.279 0 0 1-.237-6.549 3.692 3.692 0 0 1 5.668-3.86 5.103 5.103 0 0 1 9.648 1.757c-.036-.001-.072-.003-.109-.003-.568 0-1.125.115-1.64.337a4.644 4.644 0 0 0-3.778-1.929 4.67 4.67 0 0 0-4.643 4.218z"
  }));
});
Onedrive.displayName = 'Onedrive';