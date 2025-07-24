"use strict";

exports.__esModule = true;
exports.Workshop = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Workshop = exports.Workshop = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Workshop"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.5 6C8.98528 6 11 8.01472 11 10.5C11 11.2229 10.8283 11.9054 10.5254 12.5107C10.5762 12.491 10.6282 12.4725 10.6797 12.4512C11.8814 11.9539 13.3167 10.9854 15.0029 9.05859C14.9869 8.78349 15.0828 8.50316 15.293 8.29297C15.4548 8.1311 15.6585 8.03745 15.8691 8.00977C16.1353 7.66981 16.4089 7.30764 16.6865 6.91895C17.0075 6.46953 17.6316 6.36551 18.0811 6.68652C18.5305 7.00753 18.6345 7.63164 18.3135 8.08105C18.052 8.44717 17.7914 8.79269 17.5361 9.12207L18.707 10.293C19.0259 10.6118 19.0919 11.1046 18.8682 11.4961C16.7981 15.1186 15.2051 16.4707 14.0996 17.2998C13.517 17.7367 13.3197 17.8696 13.1836 18.0566C13.1066 18.1626 13 18.36 13 19V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V19C11 18.14 11.1435 17.4624 11.5664 16.8809C11.9303 16.3805 12.4832 16.0131 12.9004 15.7002C13.7343 15.0747 15.0131 14.0343 16.7461 11.1602L16.249 10.6631C14.5102 12.585 12.9222 13.6876 11.4453 14.2988C9.40978 15.1411 7.68241 15 6.5 15C4.47541 15 3 16.6261 3 18V21C3 21.5523 2.55228 22 2 22C1.44772 22 1 21.5523 1 21V18C1 16.3392 2.01001 14.7798 3.50488 13.8574C2.58174 13.0333 2 11.8348 2 10.5C2 8.01472 4.01472 6 6.5 6ZM6.5 8C5.11929 8 4 9.11929 4 10.5C4 11.8807 5.11929 13 6.5 13C7.88071 13 9 11.8807 9 10.5C9 9.11929 7.88071 8 6.5 8Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20 1C21.6569 1 23 2.34315 23 4V14C23 15.6569 21.6569 17 20 17H19.5C18.9477 17 18.5 16.5523 18.5 16C18.5 15.4477 18.9477 15 19.5 15H20C20.5523 15 21 14.5523 21 14V4C21 3.44772 20.5523 3 20 3H16C16 3.55228 15.5523 4 15 4H10C9.44772 4 9 3.55228 9 3H5C4.44772 3 4 3.44772 4 4V4.5C4 5.05228 3.55228 5.5 3 5.5C2.44772 5.5 2 5.05228 2 4.5V4C2 2.34315 3.34315 1 5 1H20Z",
    fill: "#000"
  }));
});
Workshop.displayName = 'Workshop';