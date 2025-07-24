"use strict";

exports.__esModule = true;
exports.ChapterNext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var ChapterNext = exports.ChapterNext = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ChapterNext"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23 22H21V13.2354L10.5879 20.8086C10.2837 21.0297 9.88103 21.0623 9.5459 20.8916C9.21076 20.7209 9 20.3761 9 20V15.8682L1.55469 20.832C1.2479 21.0366 0.853438 21.0557 0.52832 20.8818C0.203163 20.7078 0 20.3688 0 20V3.5C0 3.12447 0.210565 2.78034 0.544922 2.60938C0.87923 2.43855 1.28158 2.46964 1.58594 2.68945L9 8.04395V4C9 3.6239 9.21076 3.27909 9.5459 3.1084C9.88103 2.93774 10.2837 2.97026 10.5879 3.19141L21 10.7637V2H23V22ZM2 18.1309L9.44531 13.168C9.7521 12.9634 10.1466 12.9443 10.4717 13.1182C10.7968 13.2922 11 13.6312 11 14V18.0361L19.2998 12L11 5.96289V10C11 10.3755 10.7894 10.7197 10.4551 10.8906C10.1208 11.0614 9.71842 11.0304 9.41406 10.8105L2 5.45508V18.1309Z",
    fill: "#000"
  }));
});
ChapterNext.displayName = 'ChapterNext';