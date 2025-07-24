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
    d: "M20 1.27686C21.6569 1.27686 23 2.62 23 4.27686V16.2769C23 17.9337 21.6569 19.2769 20 19.2769H16.5967L16.9307 21.2769H18V23.2769H6V21.2769H7.06934L7.40332 19.2769H4C2.34315 19.2769 1 17.9337 1 16.2769V4.27686C1 2.62 2.34315 1.27686 4 1.27686H20ZM9.09668 21.2769H14.9033L14.5693 19.2769H9.43066L9.09668 21.2769ZM4 3.27686C3.44772 3.27686 3 3.72457 3 4.27686V16.2769C3 16.8291 3.44772 17.2769 4 17.2769H20C20.5523 17.2769 21 16.8291 21 16.2769V4.27686C21 3.72457 20.5523 3.27686 20 3.27686H4Z",
    fill: "#000"
  }));
});
Monitor.displayName = 'Monitor';