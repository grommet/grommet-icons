"use strict";

exports.__esModule = true;
exports.VirtualMachine = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var VirtualMachine = exports.VirtualMachine = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "VirtualMachine"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1C21.6569 1 23 2.34315 23 4V15C23 16.6569 21.6569 18 20 18H18V20C18 21.6569 16.6569 23 15 23H4C2.34315 23 1 21.6569 1 20V9C1 7.34315 2.34315 6 4 6H6V4C6 2.34315 7.34315 1 9 1H20ZM4 8C3.44772 8 3 8.44772 3 9V20C3 20.5523 3.44772 21 4 21H15C15.5523 21 16 20.5523 16 20V18H9C7.34315 18 6 16.6569 6 15V8H4ZM8 15C8 15.5523 8.44772 16 9 16H16V9C16 8.44772 15.5523 8 15 8H8V15ZM9 3C8.44772 3 8 3.44772 8 4V6H15C16.6569 6 18 7.34315 18 9V16H20C20.5523 16 21 15.5523 21 15V4C21 3.44772 20.5523 3 20 3H9Z",
    fill: "#000"
  }));
});
VirtualMachine.displayName = 'VirtualMachine';