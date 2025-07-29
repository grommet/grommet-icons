"use strict";

exports.__esModule = true;
exports.Edge = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Edge = exports.Edge = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Edge"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21.666 17.873C21.346 18.038 21.016 18.181 20.675 18.313C19.5972 18.7146 18.4562 18.9199 17.306 18.919C12.869 18.919 9.006 15.869 9.006 11.949C9.006 10.847 9.644 9.889 10.546 9.393C6.528 9.559 5.504 13.743 5.504 16.188C5.504 23.115 11.89 23.82 13.266 23.82C14.003 23.82 15.126 23.6 15.798 23.39C15.8396 23.3801 15.8799 23.3654 15.918 23.346C18.5003 22.4489 20.7015 20.7015 22.161 18.39C22.371 18.071 22.007 17.686 21.666 17.873Z",
    fill: "url(#paint0_linear_1_78)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9.908 22.641C9.06977 22.1217 8.3436 21.4404 7.772 20.637C6.84487 19.3391 6.34822 17.783 6.352 16.188C6.34822 15.0335 6.60697 13.8932 7.10868 12.8534C7.61039 11.8136 8.34193 10.9015 9.248 10.186C9.64964 9.87599 10.0811 9.60667 10.536 9.382C10.833 9.239 11.328 8.997 11.989 9.008C13.089 9.019 13.926 9.581 14.399 10.219C14.7756 10.7261 14.9837 11.3385 14.994 11.97C14.994 11.948 17.284 4.504 7.486 4.504C3.391 4.504 0 8.414 0 11.849C0 14.019 0.506 15.759 1.134 17.102C1.83756 18.5965 2.84051 19.9307 4.08073 21.0217C5.32095 22.1128 6.77201 22.9376 8.344 23.445C9.52876 23.8269 10.7662 24.0203 12.011 24.018C13.331 24.018 14.609 23.798 15.809 23.401C15.1179 23.6187 14.3976 23.73 13.673 23.731C12.3413 23.7228 11.0381 23.3455 9.908 22.641Z",
    fill: "url(#paint1_linear_1_78)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14.279 13.964C14.202 14.063 13.97 14.194 13.97 14.492C13.97 14.734 14.124 14.977 14.41 15.175C15.765 16.111 18.297 15.99 18.308 15.99C19.354 15.99 20.3 15.693 21.148 15.208C21.534 14.988 21.886 14.712 22.205 14.415C23.306 13.369 23.978 11.893 24 10.252C24.022 8.149 23.25 6.75 22.932 6.134C20.95 2.235 16.668 0 12 0C5.427 0 0.088 5.286 0 11.838C0.044 8.413 3.446 5.638 7.497 5.638C7.827 5.638 9.699 5.671 11.438 6.585C12.968 7.389 13.772 8.358 14.334 9.327C14.917 10.329 15.016 11.596 15.016 12.091C15.016 12.587 14.752 13.347 14.279 13.964Z",
    fill: "url(#paint2_radial_1_78)"
  }), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("linearGradient", {
    id: "paint0_linear_1_78",
    x1: "-0.00430658",
    y1: "12.0065",
    x2: "24.0034",
    y2: "12.0065",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react["default"].createElement("stop", {
    stopColor: "#0C59A4"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "1",
    stopColor: "#114A8B"
  })), /*#__PURE__*/_react["default"].createElement("linearGradient", {
    id: "paint1_linear_1_78",
    x1: "21.7369",
    y1: "5.96081",
    x2: "9.37025",
    y2: "22.5706",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react["default"].createElement("stop", {
    stopColor: "#1B9DE2"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "0.162",
    stopColor: "#1595DF"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "0.667",
    stopColor: "#0680D7"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "1",
    stopColor: "#0078D4"
  })), /*#__PURE__*/_react["default"].createElement("radialGradient", {
    id: "paint2_radial_1_78",
    cx: "0",
    cy: "0",
    r: "1",
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "translate(2.36617 4.38612) rotate(92.128) scale(18.9898 40.4341)"
  }, /*#__PURE__*/_react["default"].createElement("stop", {
    stopColor: "#35C1F1"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "0.111",
    stopColor: "#34C1ED"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "0.232",
    stopColor: "#2FC2DF"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "0.315",
    stopColor: "#2BC3D2"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "0.673",
    stopColor: "#36C752"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "1",
    stopColor: "#36C752"
  }))));
});
Edge.displayName = 'Edge';