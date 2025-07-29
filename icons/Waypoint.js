"use strict";

exports.__esModule = true;
exports.Waypoint = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Waypoint = exports.Waypoint = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Waypoint"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.5939 2.08583C20.9719 1.91788 21.4146 2.00032 21.7071 2.29286C21.9997 2.5854 22.0821 3.02807 21.9142 3.40614L13.9142 21.4061C13.7408 21.7961 13.3383 22.0329 12.9132 21.996C12.4882 21.9589 12.1339 21.656 12.0304 21.2421L10.1759 13.8241L2.75791 11.9696C2.34398 11.8661 2.04109 11.5118 2.00401 11.0868C1.96714 10.6616 2.20387 10.2592 2.59385 10.0858L20.5939 2.08583ZM6.05967 10.7343L11.2423 12.0302L11.3731 12.0722C11.6678 12.1906 11.8914 12.4443 11.9698 12.7577L13.2648 17.9393L19.0294 4.96962L6.05967 10.7343Z",
    fill: "#000"
  }));
});
Waypoint.displayName = 'Waypoint';