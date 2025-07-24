"use strict";

exports.__esModule = true;
exports.CheckboxSelected = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var CheckboxSelected = exports.CheckboxSelected = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CheckboxSelected"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.1523 7.92334C15.4451 7.45528 16.0621 7.31332 16.5303 7.60596C16.9983 7.89876 17.1403 8.51567 16.8477 8.98389L11.8477 16.9839C11.6861 17.2421 11.4159 17.4123 11.1133 17.4468C10.8105 17.4813 10.5085 17.3761 10.293 17.1606L7.29297 14.1606C6.90244 13.7701 6.90244 13.1371 7.29297 12.7466C7.68349 12.3561 8.31651 12.3561 8.70703 12.7466L10.8174 14.8569L15.1523 7.92334Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1.45361C20.7614 1.45361 23 3.69219 23 6.45361V18.4536C23 21.215 20.7614 23.4536 18 23.4536H6C3.23858 23.4536 1 21.215 1 18.4536V6.45361C1 3.69219 3.23858 1.45361 6 1.45361H18ZM6 3.45361C4.34315 3.45361 3 4.79676 3 6.45361V18.4536C3 20.1105 4.34315 21.4536 6 21.4536H18C19.6569 21.4536 21 20.1105 21 18.4536V6.45361C21 4.79676 19.6569 3.45361 18 3.45361H6Z",
    fill: "#000"
  }));
});
CheckboxSelected.displayName = 'CheckboxSelected';