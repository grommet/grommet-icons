"use strict";

exports.__esModule = true;
exports.Mail = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Mail = exports.Mail = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Mail"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.5996 1C16.7032 1 17.5914 0.999027 18.3086 1.05762C19.0373 1.11716 19.6773 1.24327 20.2695 1.54492C21.2103 2.02429 21.9757 2.78966 22.4551 3.73047C22.7567 4.32266 22.8828 4.9627 22.9424 5.69141C23.001 6.40857 23 7.29681 23 8.40039V15.5996C23 16.7032 23.001 17.5914 22.9424 18.3086C22.8828 19.0373 22.7567 19.6773 22.4551 20.2695C21.9757 21.2103 21.2103 21.9757 20.2695 22.4551C19.6773 22.7567 19.0373 22.8828 18.3086 22.9424C17.5914 23.001 16.7032 23 15.5996 23H8.40039C7.29681 23 6.40857 23.001 5.69141 22.9424C4.9627 22.8828 4.32266 22.7567 3.73047 22.4551C2.78966 21.9757 2.02429 21.2103 1.54492 20.2695C1.24327 19.6773 1.11716 19.0373 1.05762 18.3086C0.999027 17.5914 1 16.7032 1 15.5996V8.40039C1 7.29681 0.999027 6.40857 1.05762 5.69141C1.11716 4.9627 1.24327 4.32266 1.54492 3.73047C2.02429 2.78966 2.78966 2.02429 3.73047 1.54492C4.32266 1.24327 4.9627 1.11716 5.69141 1.05762C6.40857 0.999027 7.29681 1 8.40039 1H15.5996ZM14.0664 14.916C12.9085 16.016 11.0915 16.016 9.93359 14.916L3 8.32813V15.5996C3 16.736 3.00041 17.5287 3.05078 18.1455C3.10023 18.7507 3.19296 19.099 3.32715 19.3623C3.61472 19.9265 4.07347 20.3853 4.6377 20.6729C4.90105 20.807 5.24933 20.8998 5.85449 20.9492C6.47129 20.9996 7.26396 21 8.40039 21H15.5996C16.736 21 17.5287 20.9996 18.1455 20.9492C18.7507 20.8998 19.099 20.807 19.3623 20.6729C19.9265 20.3853 20.3853 19.9265 20.6729 19.3623C20.807 19.099 20.8998 18.7507 20.9492 18.1455C20.9996 17.5287 21 16.736 21 15.5996V8.40039C21 8.37628 20.999 8.35193 20.999 8.32813L14.0664 14.916ZM8.40039 3C7.26396 3 6.47129 3.00041 5.85449 3.05078C5.24933 3.10023 4.90105 3.19296 4.6377 3.32715C4.07347 3.61472 3.61472 4.07347 3.32715 4.6377C3.20955 4.8685 3.1268 5.16471 3.07422 5.6416L11.3115 13.4668C11.6974 13.833 12.3026 13.833 12.6885 13.4668L20.9248 5.6416C20.8722 5.16477 20.7904 4.86848 20.6729 4.6377C20.3853 4.07347 19.9265 3.61472 19.3623 3.32715C19.099 3.19296 18.7507 3.10023 18.1455 3.05078C17.5287 3.00041 16.736 3 15.5996 3H8.40039Z",
    fill: "#000"
  }));
});
Mail.displayName = 'Mail';