"use strict";

exports.__esModule = true;
exports.Spectrum = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Spectrum = exports.Spectrum = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Spectrum"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#7B2DFB",
    fillRule: "evenodd",
    d: "M22.131075,23.3986125 L13.12545,23.3986125 C12.3297,23.3986125 11.6187,22.7794875 11.6217,21.9822375 C11.64045,17.0236125 10.7442,15.3979875 8.8692,13.7584875 C6.900075,12.0372375 3.455325,11.7034875 1.49445,11.6641125 C0.6732,11.6476125 0.01695,10.9801125 0.01545,10.1573625 L7.5e-05,1.5331125 C-0.001425,0.7279875 0.627825,0.0582375 1.431075,0.0222375 C4.380825,-0.1097625 11.063325,0.2063625 16.521825,4.9786125 C20.9547,8.8538625 23.345325,14.5204875 23.639325,21.8378625 C23.67345,22.6906125 22.983075,23.3986125 22.131075,23.3986125"
  }));
});
Spectrum.displayName = 'Spectrum';