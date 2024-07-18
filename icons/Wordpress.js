"use strict";

exports.__esModule = true;
exports.Wordpress = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Wordpress = exports.Wordpress = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Wordpress"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#21759B",
    fillRule: "evenodd",
    d: "M0 12a12 12 0 0 0 6.763 10.799L1.039 7.116A11.958 11.958 0 0 0 0 11.999m20.1-.605c0-1.483-.533-2.51-.99-3.309-.607-.99-1.178-1.826-1.178-2.815 0-1.103.836-2.13 2.015-2.13.053 0 .104.007.155.01A11.954 11.954 0 0 0 12 0C7.807 0 4.12 2.151 1.973 5.408c.282.01.548.014.773.014 1.255 0 3.198-.152 3.198-.152.646-.038.723.913.076.989 0 0-.65.076-1.373.114l4.37 12.998 2.626-7.876-1.869-5.121a22.087 22.087 0 0 1-1.26-.115c-.646-.038-.57-1.027.077-.989 0 0 1.982.153 3.16.153 1.256 0 3.199-.153 3.199-.153.647-.038.723.913.076.989 0 0-.65.076-1.373.114l4.337 12.899 1.197-3.999c.518-1.66.913-2.852.913-3.879m-7.89 1.655L8.61 23.51a11.988 11.988 0 0 0 7.374-.192 1.14 1.14 0 0 1-.085-.165L12.21 13.05zm10.32-6.807c.051.383.08.792.08 1.234 0 1.217-.228 2.586-.912 4.298l-3.666 10.597A11.993 11.993 0 0 0 24 12c0-2.086-.533-4.047-1.47-5.757"
  }));
});
Wordpress.displayName = 'Wordpress';