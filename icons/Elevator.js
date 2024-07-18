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
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M1 2.991C1 1.891 1.89 1 2.991 1H21.01C22.109 1 23 1.89 23 2.991V21.01c0 1.1-.89 1.991-1.991 1.991H2.99A1.99 1.99 0 0 1 1 21.009V2.99zM16.5 8l1.5 2h-3l1.5-2zm0 8 1.5-2h-3l1.5 2zM5 13l1.556-3.112C6.801 9.398 7.444 9 8 9h0c.552 0 1.2.398 1.444.888L11 13m-4.5 5 1.25-8h.5l1.25 8M8 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
});
Elevator.displayName = 'Elevator';