"use strict";

exports.__esModule = true;
exports.DocumentWarning = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var DocumentWarning = exports.DocumentWarning = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentWarning"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.00002 12C6.37877 12 6.72517 12.214 6.89455 12.5527L11.8946 22.5527C12.0495 22.8626 12.0327 23.2306 11.8506 23.5254C11.6684 23.8202 11.3466 24 11 24H1.00002C0.653451 24 0.331643 23.8202 0.149433 23.5254C-0.0326466 23.2306 -0.0494677 22.8626 0.105488 22.5527L5.10549 12.5527L5.17678 12.4316C5.36171 12.1637 5.66857 12 6.00002 12ZM2.61818 22H9.38186L6.00002 15.2363L2.61818 22Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5205 1C14.714 1.00006 15.8683 1.4274 16.7744 2.2041L21.2529 6.04297C22.3612 6.99288 23 8.38023 23 9.83984V18C23 20.7614 20.7614 23 18 23H15V21H18C19.6568 21 21 19.6568 21 18V9.83984C21 9.55255 20.9577 9.27017 20.8789 9H17C15.3432 9 14 7.65685 14 6V3.04004C13.8423 3.01448 13.6821 3.00001 13.5205 3H6.00002C4.34316 3 3.00002 4.34315 3.00002 6V11C3.00002 11.5523 2.55228 12 2.00002 12C1.44773 12 1.00002 11.5523 1.00002 11V6C1.00002 3.23858 3.2386 1 6.00002 1H13.5205ZM16 6C16 6.55228 16.4477 7 17 7H19.2969L16 4.17383V6Z",
    fill: "#000"
  }));
});
DocumentWarning.displayName = 'DocumentWarning';