"use strict";

exports.__esModule = true;
exports.Car = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Car = exports.Car = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Car"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6 12C7.10456 12 8 12.8954 8 14C8 15.1046 7.10456 16 6 16C4.89543 16 4 15.1046 4 14C4 12.8954 4.89543 12 6 12Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 12C19.1046 12 20 12.8954 20 14C20 15.1046 19.1046 16 18 16C16.8954 16 16 15.1046 16 14C16 12.8954 16.8954 12 18 12Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 13C14.5523 13 15 13.4477 15 14C15 14.5523 14.5523 15 14 15H10C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13H14Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.5117 1C18.8365 1 20.005 1.86882 20.3857 3.1377L22.873 11.4316L22.9287 11.6436C22.976 11.8568 23 12.0751 23 12.2939V13C23 13.1074 22.9825 13.2107 22.9512 13.3076C22.9825 13.534 23 13.765 23 14V17C23 17.205 22.9684 17.4026 22.9111 17.5889C22.9678 17.7143 23 17.8534 23 18V21C23 22.1046 22.1046 23 21 23H19C17.8954 23 17 22.1046 17 21H16C14.8954 21 14 20.1046 14 19H10C10 20.1046 9.10457 21 8 21H7C7 22.1046 6.10457 23 5 23H3C1.89543 23 1 22.1046 1 21V18C1 17.8534 1.03216 17.7143 1.08887 17.5889C1.03155 17.4026 1 17.205 1 17V14C1 13.765 1.01746 13.534 1.04883 13.3076C1.01749 13.2107 1 13.1074 1 13V12.2939C1 12.002 1.04306 11.7113 1.12695 11.4316L3.61426 3.1377C3.99499 1.86882 5.16351 1 6.48828 1H17.5117ZM3 21H5V19H3V21ZM19 21H21V19H19V21ZM6 11C4.34315 11 3 12.3431 3 14V17H21V14C21 12.3431 19.6569 11 18 11H6ZM6.48828 3C6.04667 3 5.65717 3.28991 5.53027 3.71289L3.78906 9.51465C4.45572 9.18541 5.20616 9 6 9H9.7334L7.24707 6.1582C6.88371 5.74256 6.92628 5.11065 7.3418 4.74707C7.75744 4.38371 8.38935 4.42628 8.75293 4.8418L12.2529 8.8418C12.2965 8.89168 12.3342 8.94473 12.3662 9H18C18.7935 9 19.5435 9.18565 20.21 9.51465L18.4697 3.71289C18.3428 3.28991 17.9533 3 17.5117 3H6.48828Z",
    fill: "#000"
  }));
});
Car.displayName = 'Car';