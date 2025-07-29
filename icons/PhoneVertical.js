"use strict";

exports.__esModule = true;
exports.PhoneVertical = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var PhoneVertical = exports.PhoneVertical = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "PhoneVertical"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13 4C13.5523 4 14 4.44772 14 5C14 5.55228 13.5523 6 13 6H11C10.4477 6 10 5.55228 10 5C10 4.44772 10.4477 4 11 4H13Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 1C17.6569 1 19 2.34315 19 4V20C19 21.6569 17.6569 23 16 23H8C6.34315 23 5 21.6569 5 20V4C5 2.34315 6.34315 1 8 1H16ZM7 20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20V19H7V20ZM8 3C7.44772 3 7 3.44772 7 4V17H17V4C17 3.44772 16.5523 3 16 3H8Z",
    fill: "#000"
  }));
});
PhoneVertical.displayName = 'PhoneVertical';