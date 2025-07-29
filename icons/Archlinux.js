"use strict";

exports.__esModule = true;
exports.Archlinux = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Archlinux = exports.Archlinux = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Archlinux"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9955 0C10.9273 2.61899 10.283 4.33212 9.09365 6.87326C9.82286 7.64622 10.7179 8.54636 12.1715 9.56299C10.6088 8.91993 9.54278 8.27432 8.74616 7.60436C7.22405 10.7805 4.83935 15.3047 0 24C3.80356 21.8041 6.75201 20.4504 9.49982 19.9338C9.38184 19.4263 9.31474 18.8774 9.3193 18.3046L9.32382 18.1828C9.38418 15.7459 10.6518 13.872 12.1535 13.9992C13.6551 14.1265 14.8223 16.2063 14.762 18.6431C14.7506 19.1016 14.6989 19.5427 14.6085 19.9519C17.3265 20.4835 20.2434 21.8339 23.9955 24C23.2557 22.6379 22.5953 21.4101 21.9647 20.2407C20.9713 19.4708 19.9352 18.4687 17.8218 17.384C19.2744 17.7614 20.3145 18.1969 21.1252 18.6837C14.7135 6.74609 14.1943 5.15983 11.9955 0Z",
    fill: "#1793D1"
  }));
});
Archlinux.displayName = 'Archlinux';