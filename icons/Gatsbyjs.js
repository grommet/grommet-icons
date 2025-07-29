"use strict";

exports.__esModule = true;
exports.Gatsbyjs = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Gatsbyjs = exports.Gatsbyjs = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Gatsbyjs"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM22 12.0921H15.5484V13.9265H19.9718C19.3266 16.6788 17.2984 18.9719 14.6262 19.8899L4.02702 9.3398C5.13306 6.12869 8.26653 3.83515 11.8617 3.83515C14.6266 3.83515 17.1157 5.21191 18.6819 7.32161L20.0649 6.12949C18.2206 3.65091 15.2718 2 11.8617 2C7.06895 2 3.01371 5.39455 2 9.8901L14.1653 22C18.5887 20.899 22 16.863 22 12.0921ZM2 12C2 14.5928 3.01847 17.0924 4.96305 19.0369C6.90763 20.9815 9.50041 22 12 22L2 12Z",
    fill: "#663399"
  }));
});
Gatsbyjs.displayName = 'Gatsbyjs';