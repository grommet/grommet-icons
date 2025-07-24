"use strict";

exports.__esModule = true;
exports.InProgress = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var InProgress = exports.InProgress = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "InProgress"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21 1.45361C21.5523 1.45361 22 1.90133 22 2.45361C22 3.0059 21.5523 3.45361 21 3.45361V4.854C20.9998 8.43453 18.4196 11.3725 15 12.2114V12.6948C18.4197 13.5337 20.9998 16.4726 21 20.0532V21.4536C21.5523 21.4536 22 21.9013 22 22.4536C22 23.0059 21.5523 23.4536 21 23.4536H3C2.44772 23.4536 2 23.0059 2 22.4536C2 21.9013 2.44772 21.4536 3 21.4536V20.0532C3.00019 16.4726 5.58033 13.5337 9 12.6948V12.2114C5.58044 11.3725 3.00019 8.43453 3 4.854V3.45361C2.44772 3.45361 2 3.0059 2 2.45361C2 1.90133 2.44772 1.45361 3 1.45361H21ZM11 14.4536C7.63019 14.4536 5.00023 17.0152 5 20.0532V21.4536H6.5V20.9536C6.5 19.4173 7.13273 18.1379 8.17188 17.2583C9.19515 16.3921 10.5608 15.9536 12 15.9536C13.4392 15.9536 14.8049 16.3921 15.8281 17.2583C16.8673 18.1379 17.5 19.4173 17.5 20.9536V21.4536H19V20.0532C18.9998 17.0152 16.3698 14.4536 13 14.4536H11ZM5 4.854C5.00023 7.89201 7.63019 10.4536 11 10.4536H13C16.3698 10.4536 18.9998 7.89201 19 4.854V3.45361H5V4.854Z",
    fill: "#000"
  }));
});
InProgress.displayName = 'InProgress';