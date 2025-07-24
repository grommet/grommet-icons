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
    d: "M12 10.4536C12.5523 10.4536 13 10.9013 13 11.4536V17.4536C13 18.0059 12.5523 18.4536 12 18.4536C11.4477 18.4536 11 18.0059 11 17.4536V11.4536C11 10.9013 11.4477 10.4536 12 10.4536Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 6.95361C12.5523 6.95361 13 7.40133 13 7.95361V8.05322C13 8.60551 12.5523 9.05322 12 9.05322C11.4477 9.05322 11 8.60551 11 8.05322V7.95361C11 7.40133 11.4477 6.95361 12 6.95361Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1.45361C20.7614 1.45361 23 3.69219 23 6.45361V18.4536C23 21.215 20.7614 23.4536 18 23.4536H6C3.23858 23.4536 1 21.215 1 18.4536V6.45361C1 3.69219 3.23858 1.45361 6 1.45361H18ZM6 3.45361C4.34315 3.45361 3 4.79676 3 6.45361V18.4536C3 20.1105 4.34315 21.4536 6 21.4536H18C19.6569 21.4536 21 20.1105 21 18.4536V6.45361C21 4.79676 19.6569 3.45361 18 3.45361H6Z",
    fill: "#000"
  }));
});
StatusInfo.displayName = 'StatusInfo';