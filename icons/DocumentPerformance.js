"use strict";

exports.__esModule = true;
exports.DocumentPerformance = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var DocumentPerformance = exports.DocumentPerformance = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentPerformance"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5206 1C14.714 1.00007 15.8683 1.42741 16.7745 2.2041L21.253 6.04297C22.3612 6.99288 23 8.38024 23 9.83984V18C23 20.7614 20.7614 23 18 23H17.5C16.9478 23 16.5 22.5523 16.5 22C16.5 21.4477 16.9478 21 17.5 21H18C19.6569 21 21 19.6568 21 18V9.83984C21 9.55256 20.9578 9.27017 20.879 9H17C15.3432 9 14 7.65685 14 6V3.04004C13.8423 3.01448 13.6821 3.00002 13.5206 3H6.00005C4.34319 3 3.00005 4.34315 3.00005 6V8C3.00005 8.55225 2.55229 8.99995 2.00005 9C1.44776 9 1.00005 8.55228 1.00005 8V6C1.00005 3.23858 3.23862 1 6.00005 1H13.5206ZM16 6C16 6.55228 16.4478 7 17 7H19.2969L16 4.17383V6Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16 17C16 17.5523 15.5523 18 15 18C14.4478 18 14 17.5523 14 17V15.4141L8.00005 21.4141L4.00005 17.4141L1.70708 19.707C1.31657 20.0975 0.683543 20.0975 0.293015 19.707C-0.0975089 19.3165 -0.0975089 18.6835 0.293015 18.293L4.00005 14.5859L8.00005 18.5859L12.586 14H11C10.4478 14 10 13.5523 10 13C10 12.4477 10.4478 12 11 12H16V17Z",
    fill: "#000"
  }));
});
DocumentPerformance.displayName = 'DocumentPerformance';