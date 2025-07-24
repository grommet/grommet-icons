"use strict";

exports.__esModule = true;
exports.Steps = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Steps = exports.Steps = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Steps"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 2.70996C21.1046 2.70996 22 3.60539 22 4.70996V20.71C22.5523 20.71 23 21.1577 23 21.71C23 22.2622 22.5523 22.71 22 22.71H2C1.44772 22.71 1 22.2622 1 21.71C1 21.1577 1.44772 20.71 2 20.71V16.71C2 15.6054 2.89543 14.71 4 14.71H8V10.71C8 9.60539 8.89543 8.70996 10 8.70996H14V4.70996C14 3.60539 14.8954 2.70996 16 2.70996H20ZM16 9.70996C16 10.2622 15.5523 10.71 15 10.71H10V15.71C10 16.2622 9.55228 16.71 9 16.71H4V20.71H20V4.70996H16V9.70996Z",
    fill: "#000"
  }));
});
Steps.displayName = 'Steps';