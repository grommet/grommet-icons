"use strict";

exports.__esModule = true;
exports.Square = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Square = exports.Square = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Square"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#28C101",
    fillRule: "evenodd",
    d: "M14.444 8.333H9.556c-.675 0-1.223.548-1.223 1.223v4.888c0 .675.548 1.223 1.223 1.223h4.888c.675 0 1.223-.548 1.223-1.223V9.556c0-.675-.548-1.223-1.223-1.223M18.111 22H5.89A3.89 3.89 0 0 1 2 18.111V5.89A3.89 3.89 0 0 1 5.889 2H18.11A3.89 3.89 0 0 1 22 5.889V18.11A3.89 3.89 0 0 1 18.111 22zm0 2A5.89 5.89 0 0 0 24 18.111V5.89A5.89 5.89 0 0 0 18.111 0H5.89A5.89 5.89 0 0 0 0 5.889V18.11A5.89 5.89 0 0 0 5.889 24H18.11z"
  }));
});
Square.displayName = 'Square';