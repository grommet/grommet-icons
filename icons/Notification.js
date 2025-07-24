"use strict";

exports.__esModule = true;
exports.Notification = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Notification = exports.Notification = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Notification"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C16.9703 1 21 5.02974 21 10V18H22C22.5523 18 23 18.4477 23 19C23 19.5523 22.5523 20 22 20H15C15 21.6568 13.6568 23 12 23C10.3432 23 9.00004 21.6568 9 20H2C1.44772 20 1 19.5523 1 19C1.00003 18.4477 1.44774 18 2 18H3V10C3.00003 5.02974 7.02974 1 12 1ZM11 20C11 20.5522 11.4477 21 12 21C12.5523 21 13 20.5522 13 20H11ZM12 3C8.13431 3 5.00003 6.13431 5 10V18H19V10C19 6.13431 15.8657 3 12 3Z",
    fill: "#000"
  }));
});
Notification.displayName = 'Notification';