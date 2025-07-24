"use strict";

exports.__esModule = true;
exports.Turbolinux = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Turbolinux = exports.Turbolinux = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Turbolinux"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#528DC4",
    fillRule: "evenodd",
    d: "M9.41886316,6.22224 L9.96581053,7.45268211 L6.61541053,7.45268211 L6,6.22224 L9.41886316,6.22224 Z M13.1110105,12.1706526 L7.09383158,0 L14.1364421,4.17056842 L14.5465895,6.15397895 L17.8971158,6.15397895 L17.1449053,8.20509474 L14.9569895,8.20509474 L16.7346316,16.4785263 L12.5636842,14.4267789 L14.6833895,24 L8.18785263,10.8034105 L13.1110105,12.1706526 Z"
  }));
});
Turbolinux.displayName = 'Turbolinux';