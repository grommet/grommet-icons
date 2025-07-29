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
    d: "M12 6C14.2093 6 16 7.79072 16 10C16 12.2093 14.2093 14 12 14C9.79072 14 8 12.2093 8 10C8 7.79072 9.79072 6 12 6ZM12 8C10.8953 8 10 8.89528 10 10C10 11.1047 10.8953 12 12 12C13.1047 12 14 11.1047 14 10C14 8.89528 13.1047 8 12 8Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C16.4686 1 21 4.36759 21 10C21 13.395 18.7701 16.6381 16.7471 18.9141C15.7121 20.0784 14.6802 21.0461 13.9082 21.7217C13.5216 22.0599 13.198 22.3264 12.9697 22.5098C12.8556 22.6015 12.7651 22.6729 12.7021 22.7217C12.6708 22.746 12.6461 22.7652 12.6289 22.7783C12.6204 22.7848 12.6132 22.7893 12.6084 22.793C12.606 22.7948 12.604 22.7968 12.6025 22.7979L12.6006 22.7998C12.6003 22.8 12.6 22.8 12 22L12.6006 22.7998C12.2451 23.0663 11.7559 23.0663 11.4004 22.7998L12 22C11.4 22.8 11.4006 22.8 11.4004 22.7998L11.3975 22.7979C11.396 22.7968 11.394 22.7948 11.3916 22.793C11.3868 22.7893 11.3796 22.7848 11.3711 22.7783C11.3539 22.7652 11.3292 22.746 11.2979 22.7217C11.2349 22.6729 11.1444 22.6015 11.0303 22.5098C10.802 22.3264 10.4784 22.0599 10.0918 21.7217C9.31976 21.0461 8.28792 20.0784 7.25293 18.9141C5.22987 16.6381 3 13.395 3 10C3 4.36759 7.5314 1 12 1ZM12 3C8.4686 3 5 5.63241 5 10C5 12.605 6.77013 15.3619 8.74707 17.5859C9.71193 18.6714 10.6803 19.5789 11.4082 20.2158C11.6306 20.4104 11.8309 20.5786 12 20.7188C12.1691 20.5786 12.3694 20.4104 12.5918 20.2158C13.3197 19.5789 14.2881 18.6714 15.2529 17.5859C17.2299 15.3619 19 12.605 19 10C19 5.63241 15.5314 3 12 3Z",
    fill: "#000"
  }));
});
Location.displayName = 'Location';