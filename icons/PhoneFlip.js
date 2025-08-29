"use strict";

exports.__esModule = true;
exports.PhoneFlip = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var PhoneFlip = exports.PhoneFlip = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "PhoneFlip"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14.9995 6H10.9995V4H14.9995V6Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.3813 1C19.8218 1 20.7747 2.46869 20.228 3.76953L20.1704 3.89453L16.1177 12L20.1704 20.1055C20.8353 21.4353 19.8681 23 18.3813 23H8.67626C7.90976 22.9997 7.21523 22.5621 6.88134 21.8818L6.81982 21.7432L3.21923 12.7432C3.02857 12.2664 3.02857 11.7336 3.21923 11.2568L6.81982 2.25684L6.88134 2.11816C7.21523 1.43787 7.90976 1.00028 8.67626 1H18.3813ZM8.67626 21H18.3813L17.3813 19H7.87646L8.67626 21ZM7.07665 17H16.3813L14.3813 13H5.47704L7.07665 17ZM5.47704 11H14.3813L18.3813 3H8.67626L5.47704 11Z",
    fill: "#000"
  }));
});
PhoneFlip.displayName = 'PhoneFlip';