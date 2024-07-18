"use strict";

exports.__esModule = true;
exports.GoogleWallet = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var GoogleWallet = exports.GoogleWallet = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "GoogleWallet"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#4285F4",
    fillRule: "evenodd",
    d: "M12.3 20.206a2.365 2.365 0 0 1-2.722 1.046 2.386 2.386 0 0 1-1.687-2.377c-.34-3.8-2.458-7.06-5.693-8.798a2.258 2.258 0 0 1-.93-3.058c.4-.748 1.162-1.2 2-1.2.375 0 .749.09 1.071.271 2.145 1.143 4.035 2.785 5.4 4.658-.185-1.543-.673-3.047-1.49-4.36a2.393 2.393 0 0 1-.193-2.04 2.339 2.339 0 0 1 1.393-1.432 2.05 2.05 0 0 1 .852-.155c.464 0 .916.142 1.29.387.035.022.068.043.101.066-.036-.04-.1-.079-.1-.079 2.782 1.701 5.153 4.045 6.791 6.66a19.654 19.654 0 0 0-1.773-6.22 2.497 2.497 0 0 1 1.188-3.33A2.37 2.37 0 0 1 18.868 0a2.53 2.53 0 0 1 2.259 1.432 24.472 24.472 0 0 1 1.767 5.084c.4 1.78.62 3.652.633 5.51 0 1.884-.22 3.716-.62 5.51-.103.477-.22.929-.361 1.406-.439 1.587-.942 2.813-1.445 3.755A2.504 2.504 0 0 1 18.907 24c-.374 0-.735-.09-1.07-.245-.75-.349-1.2-.994-1.368-1.703a2.49 2.49 0 0 1-.065-.581c0-.542-.026-.903-.026-.903 0-2.695-.644-5.261-1.83-7.518a15.707 15.707 0 0 1-2.247 7.156z"
  }));
});
GoogleWallet.displayName = 'GoogleWallet';