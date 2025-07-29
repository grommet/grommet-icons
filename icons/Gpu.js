"use strict";

exports.__esModule = true;
exports.Gpu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Gpu = exports.Gpu = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Gpu"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3 2C4.10457 2 5 2.89543 5 4V5H21C22.6569 5 24 6.34315 24 8V18C24 19.6569 22.6569 21 21 21H5V22C5 22.5523 4.55228 23 4 23C3.44772 23 3 22.5523 3 22V4H1C0.447715 4 0 3.55228 0 3C0 2.44772 0.447715 2 1 2H3ZM5 19H21C21.5523 19 22 18.5523 22 18V8C22 7.44772 21.5523 7 21 7H5V19ZM9 15C9.55228 15 10 15.4477 10 16C10 16.5523 9.55228 17 9 17H7C6.44772 17 6 16.5523 6 16C6 15.4477 6.44772 15 7 15H9ZM16 9C18.2091 9 20 10.7909 20 13C20 15.2091 18.2091 17 16 17C13.7909 17 12 15.2091 12 13C12 10.7909 13.7909 9 16 9ZM16 11C14.8954 11 14 11.8954 14 13C14 14.1046 14.8954 15 16 15C17.1046 15 18 14.1046 18 13C18 11.8954 17.1046 11 16 11ZM9 12C9.55228 12 10 12.4477 10 13C10 13.5523 9.55228 14 9 14H7C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12H9ZM9 9C9.55228 9 10 9.44772 10 10C10 10.5523 9.55228 11 9 11H7C6.44772 11 6 10.5523 6 10C6 9.44772 6.44772 9 7 9H9Z",
    fill: "#000"
  }));
});
Gpu.displayName = 'Gpu';