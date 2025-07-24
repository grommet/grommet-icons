"use strict";

exports.__esModule = true;
exports.VolumeMute = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var VolumeMute = exports.VolumeMute = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "VolumeMute"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.3594 2.23155C11.6574 1.98319 12.0725 1.93034 12.4238 2.09484C12.7752 2.25942 13 2.6121 13 3.00011V21.0001C13 21.3894 12.774 21.7435 12.4209 21.9073C12.0675 22.0711 11.6507 22.0146 11.3535 21.7628L5.73242 17.0001H3C1.34316 17.0001 2.86733e-05 15.6569 0 14.0001V10.0001C0 8.34326 1.34315 7.00011 3 7.00011H5.63672L11.3594 2.23155ZM6.64062 8.76866C6.46091 8.91841 6.23392 9.00011 6 9.00011H3C2.44772 9.00011 2 9.44782 2 10.0001V14.0001C2.00003 14.5524 2.44773 15.0001 3 15.0001H6.09863L6.1875 15.004C6.39233 15.0222 6.58712 15.1036 6.74512 15.2374L11 18.8419V5.13585L6.64062 8.76866Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21.707 9.70714L19.4141 12.0001L21.707 14.2931L20.293 15.7071L18 13.4142L15.707 15.7071L14.293 14.2931L16.5859 12.0001L14.293 9.70714L15.707 8.29308L18 10.586L20.293 8.29308L21.707 9.70714Z",
    fill: "#000"
  }));
});
VolumeMute.displayName = 'VolumeMute';