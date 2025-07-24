"use strict";

exports.__esModule = true;
exports.Alert = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Alert = exports.Alert = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Alert"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5 19.4536V21.4536H19V19.4536H5ZM8 13.4536C8 11.2445 9.79086 9.45361 12 9.45361C12.5523 9.45361 13 9.90133 13 10.4536C13 11.0059 12.5523 11.4536 12 11.4536C10.8954 11.4536 10 12.349 10 13.4536C10 14.0059 9.55228 14.4536 9 14.4536C8.44772 14.4536 8 14.0059 8 13.4536ZM5.29297 4.24658C5.65908 3.88047 6.23809 3.85787 6.63086 4.17822L6.70703 4.24658L7.70703 5.24658L7.77539 5.32275C8.09574 5.71553 8.07315 6.29453 7.70703 6.66064C7.34092 7.02676 6.76191 7.04935 6.36914 6.729L6.29297 6.66064L5.29297 5.66064L5.22461 5.58447C4.90426 5.1917 4.92685 4.6127 5.29297 4.24658ZM17.293 4.24658C17.6835 3.85606 18.3165 3.85606 18.707 4.24658C19.0976 4.63711 19.0976 5.27012 18.707 5.66064L17.707 6.66064C17.3165 7.05117 16.6835 7.05117 16.293 6.66064C15.9024 6.27012 15.9024 5.63711 16.293 5.24658L17.293 4.24658ZM11 4.95361V2.95361C11 2.40133 11.4477 1.95361 12 1.95361C12.5523 1.95361 13 2.40133 13 2.95361V4.95361C13 5.5059 12.5523 5.95361 12 5.95361C11.4477 5.95361 11 5.5059 11 4.95361ZM17 13.4536C17 10.6922 14.7614 8.45361 12 8.45361C9.23858 8.45361 7 10.6922 7 13.4536V17.4536H17V13.4536ZM19 17.4536C20.1046 17.4536 21 18.349 21 19.4536V21.4536H22C22.5523 21.4536 23 21.9013 23 22.4536C23 23.0059 22.5523 23.4536 22 23.4536H2C1.44772 23.4536 1 23.0059 1 22.4536C1 21.9013 1.44772 21.4536 2 21.4536H3V19.4536C3 18.349 3.89543 17.4536 5 17.4536V13.4536C5 9.58762 8.13401 6.45361 12 6.45361C15.866 6.45361 19 9.58762 19 13.4536V17.4536Z",
    fill: "#000"
  }));
});
Alert.displayName = 'Alert';