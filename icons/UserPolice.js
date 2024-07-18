"use strict";

exports.__esModule = true;
exports.UserPolice = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var UserPolice = exports.UserPolice = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UserPolice"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16 14c2.374 1.183 4 3.65 4 7v2H4v-2c0-3.354 1.631-5.825 4-7m4 1c3.26 0 5.903-2.686 5.903-5.999 0-.702.218-1.375 0-2.001M6.093 7c-.21.615 0 1.313 0 2.001C6.093 12.314 8.738 15 12 15M6 8h12l3-4c-1.912-1.735-5.21-3-9-3-3.836 0-7.168 1.296-9 3l3 4zm6-3a1 1 0 0 0 1-1h-2a1 1 0 0 0 1 1z"
  }));
});
UserPolice.displayName = 'UserPolice';