"use strict";

exports.__esModule = true;
exports.Monitor = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Monitor = exports.Monitor = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Monitor"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1C21.6569 1 23 2.34315 23 4V16C23 17.6569 21.6569 19 20 19H16.5967L16.9307 21H18V23H6V21H7.06934L7.40332 19H4C2.34315 19 1 17.6569 1 16V4C1 2.34315 2.34315 1 4 1H20ZM9.09668 21H14.9033L14.5693 19H9.43066L9.09668 21ZM4 3C3.44772 3 3 3.44772 3 4V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16V4C21 3.44772 20.5523 3 20 3H4Z",
    fill: "#000"
  }));
});
Monitor.displayName = 'Monitor';