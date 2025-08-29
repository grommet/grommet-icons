"use strict";

exports.__esModule = true;
exports.Tooltip = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Tooltip = exports.Tooltip = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Tip"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 9C12.5523 9 13 9.44772 13 10V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V10C11 9.44772 11.4477 9 12 9Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 5.5C12.5523 5.5 13 5.94772 13 6.5V6.59961C13 7.15189 12.5523 7.59961 12 7.59961C11.4477 7.59961 11 7.15189 11 6.59961V6.5C11 5.94772 11.4477 5.5 12 5.5Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1C20.7614 1 23 3.23858 23 6V14C23 16.7614 20.7614 19 18 19H15.5664L13.7148 22.085C12.938 23.3796 11.062 23.3796 10.2852 22.085L8.43359 19H6C3.23858 19 1 16.7614 1 14V6C1 3.23858 3.23858 1 6 1H18ZM6 3C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H8.43359C9.13597 17 9.78695 17.3685 10.1484 17.9707L12 21.0566L13.8516 17.9707L13.9219 17.8604C14.2938 17.3236 14.9078 17 15.5664 17H18C19.6569 17 21 15.6569 21 14V6C21 4.34315 19.6569 3 18 3H6Z",
    fill: "#000"
  }));
});
Tooltip.displayName = 'Tooltip';