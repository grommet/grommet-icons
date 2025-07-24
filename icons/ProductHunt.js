"use strict";

exports.__esModule = true;
exports.ProductHunt = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var ProductHunt = exports.ProductHunt = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ProductHunt"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#DA552F",
    fillRule: "evenodd",
    d: "M13.59975,8.4 L13.59975,8.4 L10.2,8.4 L10.2,12 L13.59975,12 C14.59425,12 15.39975,11.19375 15.39975,10.2 C15.39975,9.20625 14.59425,8.4 13.59975,8.4 M13.59975,14.4 L13.59975,14.4 L10.2,14.4 L10.2,18 L7.8,18 L7.8,6 L13.59975,6 C15.9195,6 17.79975,7.88025 17.79975,10.2 C17.79975,12.51975 15.9195,14.4 13.59975,14.4 M12,0 C5.37225,0 0,5.37225 0,12 C0,18.62775 5.37225,24 12,24 C18.627,24 24,18.62775 24,12 C24,5.37225 18.627,0 12,0"
  }));
});
ProductHunt.displayName = 'ProductHunt';