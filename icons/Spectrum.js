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
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.131 23.3985H13.1254C12.3296 23.3985 11.6186 22.7794 11.6216 21.9822C11.6404 17.0235 10.7441 15.3979 8.86913 13.7584C6.9 12.0372 3.45525 11.7034 1.49438 11.664C0.673128 11.6475 0.0168777 10.98 0.0153777 10.1573L2.67615e-06 1.53303C-0.00149732 0.727903 0.627753 0.0581529 1.431 0.0221529C4.38075 -0.109847 11.0633 0.206278 16.5218 4.97853C20.9546 8.85378 23.3453 14.5204 23.6393 21.8378C23.6734 22.6905 22.983 23.3985 22.131 23.3985Z",
    fill: "#7B2DFB"
  }));
});
Spectrum.displayName = 'Spectrum';