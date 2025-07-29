"use strict";

exports.__esModule = true;
exports.Elevator = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Elevator = exports.Elevator = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Elevator"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9 10.5C9.35121 10.5 9.67668 10.6842 9.85742 10.9854L11.3574 13.4854C11.6415 13.9589 11.4881 14.5732 11.0146 14.8574C10.5411 15.1415 9.92676 14.9881 9.64258 14.5146L9 13.4434V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V13.4434L6.35742 14.5146C6.07324 14.9881 5.45888 15.1415 4.98535 14.8574C4.51188 14.5732 4.35846 13.9589 4.64258 13.4854L6.14258 10.9854L6.2168 10.8779C6.40498 10.6409 6.6927 10.5 7 10.5H9Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17 14C17.3788 14 17.7251 14.214 17.8945 14.5527C18.0639 14.8915 18.027 15.2966 17.7998 15.5996L16.2998 17.5996C16.111 17.8514 15.8148 18 15.5 18C15.1852 18 14.889 17.8514 14.7002 17.5996L13.2002 15.5996C12.973 15.2966 12.9361 14.8915 13.1055 14.5527C13.2749 14.214 13.6212 14 14 14H17Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.5 6C15.8148 6 16.111 6.14858 16.2998 6.40039L17.7998 8.40039C18.027 8.70339 18.0639 9.10854 17.8945 9.44727C17.7251 9.78605 17.3788 10 17 10H14C13.6212 10 13.2749 9.78605 13.1055 9.44727C12.9361 9.10854 12.973 8.70339 13.2002 8.40039L14.7002 6.40039L14.7754 6.31055C14.963 6.11339 15.2245 6 15.5 6Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1C20.7614 1 23 3.23858 23 6V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H18ZM6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6Z",
    fill: "#000"
  }));
});
Elevator.displayName = 'Elevator';