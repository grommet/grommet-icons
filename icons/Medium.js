"use strict";

exports.__esModule = true;
exports.Medium = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Medium = exports.Medium = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Medium"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#000",
    d: "M6.783 5a6.783 6.783 0 1 0 0 13.565A6.783 6.783 0 0 0 6.783 5Zm10.695.522c-1.873 0-3.391 2.803-3.391 6.26 0 .65.053 1.274.152 1.862.132.784.346 1.502.622 2.121.138.31.292.594.46.849.335.51.724.904 1.149 1.148.319.183.657.282 1.008.282s.69-.1 1.009-.282c.425-.244.814-.638 1.149-1.148.167-.255.321-.54.46-.849.276-.618.49-1.337.621-2.12.1-.589.153-1.214.153-1.862 0-3.458-1.519-6.261-3.392-6.261Zm5.218.521c-.136 0-.266.09-.388.259-.082.111-.16.257-.234.434a4.007 4.007 0 0 0-.107.288c-.07.206-.134.441-.193.7-.118.52-.214 1.138-.28 1.825a22.61 22.61 0 0 0-.103 2.234 24.502 24.502 0 0 0 .103 2.234c.066.686.162 1.305.28 1.824.059.26.123.495.193.7.034.104.07.2.107.288.074.177.153.323.234.435.122.168.253.258.388.258.72 0 1.304-2.57 1.304-5.74 0-3.169-.584-5.739-1.304-5.739Z"
  }));
});
Medium.displayName = 'Medium';