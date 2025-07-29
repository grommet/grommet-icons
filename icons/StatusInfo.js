"use strict";

exports.__esModule = true;
exports.StatusInfo = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var StatusInfo = exports.StatusInfo = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StatusInfo"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 10C12.5523 10 13 10.4477 13 11V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11C11 10.4477 11.4477 10 12 10Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 6.5C12.5523 6.5 13 6.94772 13 7.5V7.59961C13 8.15189 12.5523 8.59961 12 8.59961C11.4477 8.59961 11 8.15189 11 7.59961V7.5C11 6.94772 11.4477 6.5 12 6.5Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1C20.7614 1 23 3.23858 23 6V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H18ZM6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6Z",
    fill: "#000"
  }));
});
StatusInfo.displayName = 'StatusInfo';