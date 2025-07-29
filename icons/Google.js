"use strict";

exports.__esModule = true;
exports.Google = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Google = exports.Google = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Google"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5.2662 9.76453C6.19879 6.93863 8.85445 4.90909 12 4.90909C13.6909 4.90909 15.2182 5.50909 16.4182 6.49091L19.9091 3C17.7818 1.14545 15.0545 0 12 0C7.27007 0 3.19775 2.6983 1.23999 6.65002L5.2662 9.76453Z",
    fill: "#EA4335"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16.0407 18.0126C14.9509 18.7163 13.5661 19.0909 12 19.0909C8.86649 19.0909 6.21912 17.0769 5.27698 14.2679L1.23746 17.335C3.19279 21.2936 7.265 24 12 24C14.9328 24 17.7353 22.9574 19.8342 20.9996L16.0407 18.0126Z",
    fill: "#34A853"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19.8342 20.9996C22.0292 18.9521 23.4545 15.9037 23.4545 12C23.4545 11.2909 23.3455 10.5273 23.1818 9.81818H12V14.4545H18.4364C18.1188 16.0136 17.2663 17.2212 16.0407 18.0126L19.8342 20.9996Z",
    fill: "#4A90E2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5.27698 14.2679C5.03833 13.5563 4.90909 12.7938 4.90909 12C4.90909 11.2183 5.03444 10.4668 5.2662 9.76453L1.23999 6.65002C0.436587 8.26043 0 10.0754 0 12C0 13.9195 0.444781 15.7302 1.23746 17.335L5.27698 14.2679Z",
    fill: "#FBBC05"
  }));
});
Google.displayName = 'Google';