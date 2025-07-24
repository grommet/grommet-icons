"use strict";

exports.__esModule = true;
exports.DocumentUser = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var DocumentUser = exports.DocumentUser = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentUser"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.5 10C7.98545 10 10 12.0145 10 14.5C10 15.6943 9.53341 16.7784 8.77441 17.584C8.91218 17.6459 9.04567 17.7142 9.1748 17.7881C10.295 18.4294 11 19.5054 11 21V23C11 23.5523 10.5523 24 10 24C9.44771 24 9 23.5523 9 23V21C9 20.2451 8.6992 19.8207 8.18164 19.5244C7.59053 19.186 6.67266 19.0031 5.49023 19C4.30723 19.0031 3.39555 19.1856 2.81055 19.5225C2.29991 19.8166 2 20.2405 2 21V23C2 23.5523 1.55228 24 1 24C0.447715 24 0 23.5523 0 23V21C0 19.5099 0.695487 18.4335 1.8125 17.79C1.94444 17.714 2.08066 17.6434 2.22168 17.5801C1.46493 16.7749 1 15.6923 1 14.5C1 12.0145 3.01455 10 5.5 10ZM5.5 12C4.11912 12 3 13.1191 3 14.5C3 15.8809 4.11912 17 5.5 17C6.88088 17 8 15.8809 8 14.5C8 13.1191 6.88088 12 5.5 12Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5205 1C14.714 1.00005 15.8682 1.42739 16.7744 2.2041L21.2529 6.04297C22.3612 6.99288 23 8.38022 23 9.83984V18C23 20.7614 20.7614 23 18 23H15C14.4477 23 14 22.5523 14 22C14 21.4477 14.4477 21 15 21H18C19.6569 21 21 19.6569 21 18V9.83984C21 9.55255 20.9577 9.27017 20.8789 9H17C15.3431 9 14 7.65685 14 6V3.04004C13.8423 3.01447 13.6821 3.00001 13.5205 3H6C4.34315 3 3 4.34315 3 6V8C3 8.55228 2.55228 9 2 9C1.44772 9 1 8.55228 1 8V6C1 3.23858 3.23858 1 6 1H13.5205ZM16 6C16 6.55228 16.4477 7 17 7H19.2969L16 4.17383V6Z",
    fill: "#000"
  }));
});
DocumentUser.displayName = 'DocumentUser';