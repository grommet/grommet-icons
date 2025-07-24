"use strict";

exports.__esModule = true;
exports.Emergency = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Emergency = exports.Emergency = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Emergency"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.9998 1.45361C14.5521 1.45361 14.9998 1.90133 14.9998 2.45361V7.25732L19.16 4.85596L19.2478 4.81006C19.4574 4.71523 19.6946 4.6954 19.9187 4.75537C20.1748 4.82398 20.3935 4.99167 20.5262 5.22119L22.5262 8.68604C22.8021 9.16429 22.6382 9.77517 22.16 10.0513L17.9998 12.4536L22.16 14.856C22.6381 15.1321 22.8021 15.743 22.5262 16.2212L20.5262 19.686C20.3935 19.9156 20.1748 20.0832 19.9187 20.1519C19.6626 20.2204 19.3896 20.1838 19.16 20.0513L14.9998 17.6489V22.4536C14.9998 23.0059 14.5521 23.4536 13.9998 23.4536H9.9998C9.4476 23.4535 8.9998 23.0058 8.9998 22.4536V17.6489L4.83964 20.0513C4.3614 20.3274 3.74962 20.1642 3.47343 19.686L1.47343 16.2212C1.34101 15.9916 1.30522 15.7184 1.37382 15.4624C1.44249 15.2065 1.61018 14.9885 1.83964 14.856L5.99882 12.4536L1.83964 10.0513C1.36161 9.77515 1.19762 9.16421 1.47343 8.68604L3.47343 5.22119C3.60605 4.99161 3.82475 4.82399 4.08085 4.75537C4.33701 4.68676 4.60999 4.72336 4.83964 4.85596L8.9998 7.25732V2.45361C8.9998 1.90139 9.4476 1.45372 9.9998 1.45361H13.9998ZM10.9998 8.98975C10.9997 9.34694 10.8091 9.67735 10.4998 9.85596C10.1905 10.0344 9.8091 10.0345 9.4998 9.85596L4.70488 7.0874L3.70488 8.81982L8.4998 11.5874C8.80919 11.766 8.99979 12.0964 8.9998 12.4536C8.9998 12.8109 8.8092 13.1412 8.4998 13.3198L3.70488 16.0864L4.70488 17.8188L9.4998 15.0513C9.80908 14.8727 10.1905 14.8728 10.4998 15.0513C10.8091 15.2299 10.9997 15.5603 10.9998 15.9175V21.4536H12.9998V15.9175C12.9999 15.5603 13.1905 15.2299 13.4998 15.0513C13.8091 14.8727 14.1905 14.8729 14.4998 15.0513L19.2937 17.8188L20.2937 16.0864L15.4998 13.3198C15.1904 13.1412 14.9998 12.8109 14.9998 12.4536C14.9998 12.0964 15.1904 11.766 15.4998 11.5874L20.2937 8.81982L19.2937 7.0874L14.4998 9.85596C14.1905 10.0344 13.8091 10.0345 13.4998 9.85596C13.1905 9.67736 12.9999 9.34692 12.9998 8.98975V3.45361H10.9998V8.98975Z",
    fill: "#000"
  }));
});
Emergency.displayName = 'Emergency';