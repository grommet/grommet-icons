"use strict";

exports.__esModule = true;
exports.Location = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Location = exports.Location = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Location"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 6.70996C14.2093 6.70996 16 8.50068 16 10.71C16 12.9192 14.2093 14.71 12 14.71C9.79072 14.71 8 12.9192 8 10.71C8 8.50068 9.79072 6.70996 12 6.70996ZM12 8.70996C10.8953 8.70996 10 9.60525 10 10.71C10 11.8147 10.8953 12.71 12 12.71C13.1047 12.71 14 11.8147 14 10.71C14 9.60525 13.1047 8.70996 12 8.70996Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1.70996C16.4686 1.70996 21 5.07755 21 10.71C21 14.105 18.7701 17.3481 16.7471 19.624C15.7121 20.7884 14.6802 21.7561 13.9082 22.4316C13.5216 22.7699 13.198 23.0363 12.9697 23.2197C12.8556 23.3114 12.7651 23.3829 12.7021 23.4316C12.6708 23.456 12.6461 23.4752 12.6289 23.4883C12.6204 23.4947 12.6132 23.4993 12.6084 23.5029C12.606 23.5047 12.604 23.5067 12.6025 23.5078L12.6006 23.5098C12.6003 23.51 12.6 23.51 12 22.71L12.6006 23.5098C12.2451 23.7763 11.7559 23.7763 11.4004 23.5098L12 22.71C11.4 23.51 11.4006 23.51 11.4004 23.5098L11.3975 23.5078C11.396 23.5067 11.394 23.5047 11.3916 23.5029C11.3868 23.4993 11.3796 23.4947 11.3711 23.4883C11.3539 23.4752 11.3292 23.456 11.2979 23.4316C11.2349 23.3829 11.1444 23.3114 11.0303 23.2197C10.802 23.0363 10.4784 22.7699 10.0918 22.4316C9.31976 21.7561 8.28792 20.7884 7.25293 19.624C5.22987 17.3481 3 14.105 3 10.71C3 5.07755 7.5314 1.70996 12 1.70996ZM12 3.70996C8.4686 3.70996 5 6.34237 5 10.71C5 13.3149 6.77013 16.0718 8.74707 18.2959C9.71193 19.3814 10.6803 20.2888 11.4082 20.9258C11.6306 21.1204 11.8309 21.2886 12 21.4287C12.1691 21.2886 12.3694 21.1204 12.5918 20.9258C13.3197 20.2888 14.2881 19.3814 15.2529 18.2959C17.2299 16.0718 19 13.3149 19 10.71C19 6.34237 15.5314 3.70996 12 3.70996Z",
    fill: "#000"
  }));
});
Location.displayName = 'Location';