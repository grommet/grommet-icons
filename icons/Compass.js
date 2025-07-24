"use strict";

exports.__esModule = true;
exports.Compass = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Compass = exports.Compass = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Compass"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.8037 8.72949C15.1316 8.66392 15.4706 8.76651 15.707 9.00293C15.9435 9.23935 16.046 9.57839 15.9805 9.90625L14.9805 14.9062C14.9012 15.302 14.592 15.6112 14.1963 15.6904L9.19629 16.6904C8.86843 16.756 8.52939 16.6534 8.29297 16.417C8.05655 16.1806 7.95396 15.8415 8.01953 15.5137L9.01953 10.5137L9.05957 10.3701C9.17715 10.0445 9.45729 9.79885 9.80371 9.72949L14.8037 8.72949ZM12 11.71C11.4477 11.71 11 12.1577 11 12.71C11 13.2622 11.4477 13.71 12 13.71C12.5523 13.71 13 13.2622 13 12.71C13 12.1577 12.5523 11.71 12 11.71Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1.70996C18.0751 1.70996 23 6.63483 23 12.71C23 18.7851 18.0751 23.71 12 23.71C5.92487 23.71 1 18.7851 1 12.71C1 6.63483 5.92487 1.70996 12 1.70996ZM12 3.70996C7.02944 3.70996 3 7.7394 3 12.71C3 17.6805 7.02944 21.71 12 21.71C16.9706 21.71 21 17.6805 21 12.71C21 7.7394 16.9706 3.70996 12 3.70996Z",
    fill: "#000"
  }));
});
Compass.displayName = 'Compass';