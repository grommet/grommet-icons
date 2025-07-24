"use strict";

exports.__esModule = true;
exports.Theme = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Theme = exports.Theme = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Theme"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 1C20.6569 1 22 2.34315 22 4V10.5C22 11.8058 21.3035 12.6552 20.4326 13.1943C19.6342 13.6886 18.6098 13.9732 17.7744 14.2119C16.86 14.4732 16.1341 14.6887 15.6201 15.0068C15.1786 15.2802 15 15.5559 15 16V20C15 21.6569 13.6569 23 12 23C10.3431 23 9 21.6569 9 20V16C9 15.5559 8.82141 15.2802 8.37988 15.0068C7.86594 14.6887 7.14 14.4732 6.22559 14.2119C5.39023 13.9732 4.36585 13.6886 3.56738 13.1943C2.69651 12.6552 2 11.8058 2 10.5V4C2 2.34315 3.34315 1 5 1H19ZM4 10.5C4 10.9441 4.17859 11.2198 4.62012 11.4932C5.13406 11.8113 5.86 12.0268 6.77441 12.2881C7.60977 12.5268 8.63415 12.8114 9.43262 13.3057C10.3035 13.8448 11 14.6942 11 16V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V16C13 14.6942 13.6965 13.8448 14.5674 13.3057C15.3658 12.8114 16.3902 12.5268 17.2256 12.2881C18.14 12.0268 18.8659 11.8113 19.3799 11.4932C19.8214 11.2198 20 10.9441 20 10.5V10H4V10.5ZM5 3C4.44772 3 4 3.44772 4 4V8H20V4C20 3.44772 19.5523 3 19 3H17.5V6C17.5 6.55228 17.0523 7 16.5 7C15.9477 7 15.5 6.55228 15.5 6V3H15V4C15 4.55228 14.5523 5 14 5C13.4477 5 13 4.55228 13 4V3H5Z",
    fill: "#000"
  }));
});
Theme.displayName = 'Theme';