"use strict";

exports.__esModule = true;
exports.Indicator = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Indicator = exports.Indicator = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Indicator"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 5.70996C14.2091 5.70996 16 7.50082 16 9.70996C16 11.9191 14.2091 13.71 12 13.71C9.79086 13.71 8 11.9191 8 9.70996C8 7.50082 9.79086 5.70996 12 5.70996ZM12 7.70996C10.8954 7.70996 10 8.60539 10 9.70996C10 10.8145 10.8954 11.71 12 11.71C13.1046 11.71 14 10.8145 14 9.70996C14 8.60539 13.1046 7.70996 12 7.70996Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1.70996C16.4183 1.70996 20 5.29168 20 9.70996C20 10.7743 19.8606 11.6594 19.4873 12.5654C19.1246 13.4457 18.5603 14.2955 17.7998 15.3096C17.3888 15.8575 16.9817 16.2981 16.6211 16.6748C16.2472 17.0653 15.9608 17.3512 15.7119 17.6553C15.2754 18.1888 15 18.7208 15 19.71V21.71C15 23.3668 13.6569 24.71 12 24.71C10.3431 24.71 9 23.3668 9 21.71V19.71C9 18.7208 8.72461 18.1888 8.28809 17.6553C8.03921 17.3512 7.75278 17.0653 7.37891 16.6748C7.01827 16.2981 6.61115 15.8575 6.2002 15.3096C5.43968 14.2955 4.87543 13.4457 4.5127 12.5654C4.13943 11.6594 4 10.7743 4 9.70996C4 5.29168 7.58172 1.70996 12 1.70996ZM12 3.70996C8.68629 3.70996 6 6.39625 6 9.70996C6 10.5784 6.11071 11.1931 6.3623 11.8037C6.62455 12.4401 7.06038 13.1244 7.7998 14.1104C8.13871 14.5622 8.48183 14.9344 8.82422 15.292C9.15322 15.6356 9.52346 16.0065 9.83691 16.3896C10.5252 17.231 11 18.1994 11 19.71V21.71C11 22.2622 11.4477 22.71 12 22.71C12.5523 22.71 13 22.2622 13 21.71V19.71C13 18.1994 13.4748 17.231 14.1631 16.3896C14.4765 16.0065 14.8468 15.6356 15.1758 15.292C15.5182 14.9344 15.8613 14.5622 16.2002 14.1104C16.9396 13.1244 17.3754 12.4401 17.6377 11.8037C17.8893 11.1931 18 10.5784 18 9.70996C18 6.39625 15.3137 3.70996 12 3.70996Z",
    fill: "#000"
  }));
});
Indicator.displayName = 'Indicator';