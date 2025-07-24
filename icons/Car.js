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
    d: "M6 12.71C7.10456 12.71 8 13.6054 8 14.71C8 15.8145 7.10456 16.71 6 16.71C4.89543 16.71 4 15.8145 4 14.71C4 13.6054 4.89543 12.71 6 12.71Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 12.71C19.1046 12.71 20 13.6054 20 14.71C20 15.8145 19.1046 16.71 18 16.71C16.8954 16.71 16 15.8145 16 14.71C16 13.6054 16.8954 12.71 18 12.71Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 13.71C14.5523 13.71 15 14.1577 15 14.71C15 15.2622 14.5523 15.71 14 15.71H10C9.44772 15.71 9 15.2622 9 14.71C9 14.1577 9.44772 13.71 10 13.71H14Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.5117 1.70996C18.8365 1.70996 20.005 2.57879 20.3857 3.84766L22.873 12.1416L22.9287 12.3535C22.976 12.5667 23 12.7851 23 13.0039V13.71C23 13.8174 22.9825 13.9206 22.9512 14.0176C22.9825 14.2439 23 14.475 23 14.71V17.71C23 17.915 22.9684 18.1126 22.9111 18.2988C22.9678 18.4243 23 18.5633 23 18.71V21.71C23 22.8145 22.1046 23.71 21 23.71H19C17.8954 23.71 17 22.8145 17 21.71H16C14.8954 21.71 14 20.8145 14 19.71H10C10 20.8145 9.10457 21.71 8 21.71H7C7 22.8145 6.10457 23.71 5 23.71H3C1.89543 23.71 1 22.8145 1 21.71V18.71C1 18.5633 1.03216 18.4243 1.08887 18.2988C1.03155 18.1126 1 17.915 1 17.71V14.71C1 14.475 1.01746 14.2439 1.04883 14.0176C1.01749 13.9206 1 13.8174 1 13.71V13.0039C1 12.7119 1.04306 12.4213 1.12695 12.1416L3.61426 3.84766C3.99499 2.57879 5.16351 1.70996 6.48828 1.70996H17.5117ZM3 21.71H5V19.71H3V21.71ZM19 21.71H21V19.71H19V21.71ZM6 11.71C4.34315 11.71 3 13.0531 3 14.71V17.71H21V14.71C21 13.0531 19.6569 11.71 18 11.71H6ZM6.48828 3.70996C6.04667 3.70996 5.65717 3.99987 5.53027 4.42285L3.78906 10.2246C4.45572 9.89537 5.20616 9.70996 6 9.70996H9.7334L7.24707 6.86816C6.88371 6.45252 6.92628 5.82061 7.3418 5.45703C7.75744 5.09367 8.38935 5.13624 8.75293 5.55176L12.2529 9.55176C12.2965 9.60164 12.3342 9.65469 12.3662 9.70996H18C18.7935 9.70996 19.5435 9.89561 20.21 10.2246L18.4697 4.42285C18.3428 3.99987 17.9533 3.70996 17.5117 3.70996H6.48828Z",
    fill: "#000"
  }));
});
Car.displayName = 'Car';