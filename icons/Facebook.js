"use strict";

exports.__esModule = true;
exports.Facebook = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Facebook = exports.Facebook = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Facebook"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 0C5.373 0 0 5.373 0 12C0 18.016 4.432 22.984 10.207 23.852V15.18H7.237V12.025H10.207V9.927C10.207 6.452 11.9 4.927 14.787 4.927C16.171 4.927 16.902 5.029 17.249 5.076V7.829H15.279C14.053 7.829 13.624 8.992 13.624 10.302V12.026H17.218L16.73 15.181H13.624V23.877C19.481 23.083 24 18.075 24 12C24 5.373 18.627 0 12 0Z",
    fill: "#1089FB"
  }));
});
Facebook.displayName = 'Facebook';