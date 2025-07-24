"use strict";

exports.__esModule = true;
exports.Time = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Time = exports.Time = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Time"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.09863 3.68168C6.53109 2.32744 8.47626 2.30657 8.9375 3.65141L8.97852 3.79008L12.6201 18.3575L15.5439 9.26273L15.5908 9.1348C16.1044 7.89553 17.898 7.92469 18.3711 9.17973L18.4141 9.30961L19.5469 13.2745C19.6696 13.7037 20.0624 14 20.5088 14H22C22.5522 14 22.9999 14.4478 23 15C22.9999 15.5522 22.5522 16 22 16H20.5088C19.1694 16 17.992 15.1121 17.624 13.8243L16.9434 11.4434L13.9883 20.6377C13.5264 22.0742 11.4706 22.0068 11.1045 20.543L7.5459 6.30766L6.3291 11.6651C6.01861 13.0308 4.80395 14 3.40332 14H2C1.44777 14 1.00009 13.5522 1 13C1.00006 12.4478 1.44775 12 2 12H3.40332C3.87017 12 4.27537 11.6769 4.37891 11.2217L6.06055 3.8223L6.09863 3.68168Z",
    fill: "#000"
  }));
});
Time.displayName = 'Time';