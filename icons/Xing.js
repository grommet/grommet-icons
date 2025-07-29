"use strict";

exports.__esModule = true;
exports.Xing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Xing = exports.Xing = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Xing"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.85998 4.73999C3.65098 4.73999 3.47599 4.81399 3.38798 4.95699C3.29598 5.10399 3.30998 5.29499 3.40798 5.48699L5.74799 9.53899C5.75199 9.54699 5.75199 9.55199 5.74799 9.55899L2.06998 16.049C1.97398 16.239 1.97898 16.432 2.06998 16.579C2.11795 16.6549 2.1851 16.7167 2.26464 16.7584C2.34418 16.8 2.4333 16.8198 2.52298 16.816H5.98399C6.50099 16.816 6.75099 16.466 6.92799 16.147L10.665 9.53899L8.28499 5.38899C8.11299 5.08299 7.85198 4.73999 7.32199 4.73999H3.85998Z",
    fill: "#005A5F"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18.401 0C17.884 0 17.661 0.326 17.474 0.66C17.474 0.66 10.018 13.884 9.77197 14.318L14.69 23.341C14.862 23.648 15.127 24 15.657 24H19.114C19.323 24 19.486 23.922 19.574 23.779C19.666 23.631 19.664 23.436 19.567 23.244L14.687 14.329C14.6846 14.3256 14.6833 14.3216 14.6833 14.3175C14.6833 14.3134 14.6846 14.3094 14.687 14.306L22.351 0.756C22.447 0.564 22.449 0.369 22.358 0.221C22.27 0.08 22.106 0 21.898 0H18.401Z",
    fill: "#D4D600"
  }));
});
Xing.displayName = 'Xing';