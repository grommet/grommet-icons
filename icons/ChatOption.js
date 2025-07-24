"use strict";

exports.__esModule = true;
exports.ChatOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var ChatOption = exports.ChatOption = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ChatOption"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21 1C22.6569 1 24 2.34315 24 4V11C24 12.6569 22.6569 14 21 14H20V19.4141L16.9736 16.3877C16.7834 17.8613 15.5254 19 14 19H11.3516L5 24.0811V19H3C1.34315 19 0 17.6569 0 16V9C0 7.34315 1.34315 6 3 6H7V4C7 2.34315 8.34315 1 10 1H21ZM3 8C2.44772 8 2 8.44772 2 9V16C2 16.5523 2.44772 17 3 17H7V19.918L10.375 17.2188L10.6494 17H14C14.5523 17 15 16.5523 15 16V9C15 8.44772 14.5523 8 14 8H3ZM10 3C9.44771 3 9 3.44772 9 4V6H14C15.6569 6 17 7.34315 17 9V13.5859L18 14.5859V12H21C21.5523 12 22 11.5523 22 11V4C22 3.44772 21.5523 3 21 3H10Z",
    fill: "#000"
  }));
});
ChatOption.displayName = 'ChatOption';