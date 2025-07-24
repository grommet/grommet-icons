"use strict";

exports.__esModule = true;
exports.StatusUnknown = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var StatusUnknown = exports.StatusUnknown = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StatusUnknown"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.1621 15.7437C12.9187 15.8203 13.5088 16.46 13.5088 17.2368C13.5085 18.065 12.8371 18.7368 12.0088 18.7368C11.2324 18.7367 10.5936 18.1462 10.5166 17.3901L10.5088 17.2368L10.5166 17.0825C10.5936 16.3264 11.2324 15.737 12.0088 15.7368L12.1621 15.7437Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 5.95361C13.1555 5.95361 14.1699 6.24238 14.9082 6.88818C15.664 7.54949 16 8.47109 16 9.45361C16 10.6411 15.6948 11.4818 15.1182 12.1216C14.8506 12.4184 14.5543 12.6385 14.29 12.8149C14.1586 12.9027 14.0241 12.9859 13.9043 13.061C13.7803 13.1388 13.6678 13.2097 13.5576 13.2837C13.2062 13.5197 13.0641 13.6959 13.0059 13.8101C12.9614 13.8972 12.9297 14.015 12.9785 14.2476C13.0921 14.7879 12.7464 15.3184 12.2061 15.4321C11.6657 15.5458 11.1353 15.2 11.0215 14.6597C10.8953 14.0593 10.938 13.4625 11.2246 12.9009C11.4975 12.3662 11.9433 11.9587 12.4424 11.6235C12.5821 11.5297 12.7197 11.4432 12.8418 11.3667C12.968 11.2876 13.0758 11.2196 13.1787 11.1509C13.383 11.0145 13.5245 10.9018 13.6318 10.7827C13.8052 10.5904 14 10.2661 14 9.45361C14 8.93638 13.8358 8.60775 13.5918 8.39404C13.3301 8.16505 12.8443 7.95361 12 7.95361C10.5523 7.95361 10 9.0059 10 9.45361C10 10.0059 9.55228 10.4536 9 10.4536C8.44772 10.4536 8 10.0059 8 9.45361C8 7.90133 9.44772 5.95361 12 5.95361Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1.45361C20.7614 1.45361 23 3.69219 23 6.45361V18.4536C23 21.215 20.7614 23.4536 18 23.4536H6C3.23858 23.4536 1 21.215 1 18.4536V6.45361C1 3.69219 3.23858 1.45361 6 1.45361H18ZM6 3.45361C4.34315 3.45361 3 4.79676 3 6.45361V18.4536C3 20.1105 4.34315 21.4536 6 21.4536H18C19.6569 21.4536 21 20.1105 21 18.4536V6.45361C21 4.79676 19.6569 3.45361 18 3.45361H6Z",
    fill: "#000"
  }));
});
StatusUnknown.displayName = 'StatusUnknown';