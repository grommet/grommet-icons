"use strict";

exports.__esModule = true;
exports.WeChat = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var WeChat = exports.WeChat = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "WeChat"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#51CE5E",
    fillRule: "evenodd",
    d: "M21.502 19.228C23.026 18.123 24 16.49 24 14.674c0-3.326-3.237-6.023-7.229-6.023s-7.229 2.697-7.229 6.023c0 3.327 3.237 6.024 7.229 6.024.825 0 1.621-.117 2.36-.33l.212-.032c.139 0 .265.043.384.111l1.583.914.139.045a.241.241 0 0 0 .241-.241l-.039-.176-.326-1.215-.025-.154a.48.48 0 0 1 .202-.392ZM8.675 2C3.884 2 0 5.236 0 9.229c0 2.178 1.168 4.139 2.997 5.464a.575.575 0 0 1 .243.471l-.03.184-.391 1.458-.047.211c0 .16.13.29.289.29l.168-.054 1.899-1.097a.908.908 0 0 1 .46-.133l.255.038c.886.255 1.842.397 2.832.397l.476-.012a5.586 5.586 0 0 1-.291-1.771c0-3.641 3.542-6.593 7.911-6.593l.471.012C16.589 4.641 13.002 2 8.675 2Zm5.686 11.711a.964.964 0 1 1 .001-1.927.964.964 0 0 1-.001 1.927Zm4.82 0a.964.964 0 1 1 0-1.928.964.964 0 0 1 0 1.928ZM5.783 8.072a1.156 1.156 0 1 1 0-2.312 1.156 1.156 0 0 1 0 2.312Zm5.783 0a1.156 1.156 0 1 1 0-2.312 1.156 1.156 0 0 1 0 2.312Z",
    clipRule: "evenodd"
  }));
});
WeChat.displayName = 'WeChat';