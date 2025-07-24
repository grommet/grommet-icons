"use strict";

exports.__esModule = true;
exports.Configure = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Configure = exports.Configure = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Configure"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.9998 1C16.0716 1 16.8357 1.67447 17.0819 2.54492C17.3146 3.3682 17.0777 4.30677 16.411 4.97949L15.1121 6.29004C14.7247 6.68104 14.7259 7.3119 15.1151 7.70117L16.2987 8.88477L16.3748 8.95312C16.7663 9.27267 17.3432 9.25096 17.7098 8.8877L19.0203 7.58887L19.1502 7.46875C19.8105 6.8945 20.6833 6.69989 21.4549 6.91797C22.3254 7.16411 22.9998 7.92817 22.9998 9C22.9998 13.4183 19.4181 17 14.9998 17C14.2149 17 13.4568 16.8846 12.7401 16.6738C11.0058 18.4026 9.25263 20.1757 7.73518 21.7041L6.96858 20.9424L7.73127 21.709C6.82649 22.6099 5.77429 23.036 4.73615 23.0254C3.71309 23.0148 2.78494 22.58 2.11506 21.9102C1.44528 21.2402 1.01031 20.3121 0.999825 19.2891C0.989264 18.2509 1.41613 17.1987 2.31721 16.2939L3.02522 17L2.9344 16.9082L2.31721 16.2939L4.96858 13.6387C5.74136 12.8605 6.53468 12.0598 7.326 11.2627C7.11475 10.5451 6.99983 9.78599 6.99983 9C6.99983 4.58179 10.5816 1.00011 14.9998 1ZM8.20295 13.2178C6.65005 14.7832 5.09936 16.3487 3.73322 17.7051L3.7342 17.7061C3.16994 18.2728 2.99534 18.8229 2.99983 19.2686C3.00455 19.7292 3.20079 20.1676 3.52912 20.4961C3.85756 20.8245 4.296 21.0206 4.75666 21.0254C5.20239 21.03 5.75323 20.8556 6.32014 20.291C7.6739 18.9275 9.22725 17.3585 10.786 15.7998C9.73893 15.1495 8.85381 14.2644 8.20295 13.2178ZM14.9998 3C11.6862 3.00011 8.99982 5.68636 8.99982 9C8.99982 12.3136 11.6862 14.9999 14.9998 15C18.3135 15 20.9998 12.3137 20.9998 9C20.9998 8.94858 20.9922 8.91766 20.9871 8.90234C20.9823 8.88786 20.9778 8.88098 20.9754 8.87793C20.9721 8.87372 20.9568 8.85577 20.911 8.84277C20.823 8.81798 20.6592 8.82618 20.4979 8.94922L20.4285 9.00977L19.118 10.3086C17.9449 11.4711 16.0524 11.4667 14.8846 10.2988L13.701 9.11523C12.5333 7.94739 12.5287 6.05489 13.6912 4.88184L14.9901 3.57129C15.1706 3.38914 15.1855 3.18939 15.1571 3.08887C15.144 3.04269 15.1259 3.02755 15.1219 3.02441C15.1188 3.02204 15.1118 3.01743 15.0975 3.0127C15.0821 3.00765 15.051 3 14.9998 3Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.73518 21.7041L7.73127 21.709L7.02619 21L7.73518 21.7041Z",
    fill: "#000"
  }));
});
Configure.displayName = 'Configure';