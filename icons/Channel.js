"use strict";

exports.__esModule = true;
exports.Channel = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Channel = exports.Channel = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Channel"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.24707 1.34181C2.58796 0.952268 3.16494 0.8903 3.57812 1.18361L3.6582 1.24709L11.376 8.00002H12.624L20.3418 1.24709C20.7574 0.883778 21.3894 0.926344 21.7529 1.34181C22.1163 1.75744 22.0737 2.38936 21.6582 2.75295L15.6611 8.00002H20C21.6568 8.00002 23 9.3432 23 11V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V11C1.00004 9.3432 2.34317 8.00002 4 8.00002H8.33887L2.3418 2.75295L2.26758 2.68166C1.92198 2.31117 1.90645 1.73144 2.24707 1.34181ZM4 10C3.44774 10 3.00004 10.4478 3 11V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V11C21 10.4478 20.5523 10 20 10H4Z",
    fill: "#000"
  }));
});
Channel.displayName = 'Channel';