"use strict";

exports.__esModule = true;
exports.Tree = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Tree = exports.Tree = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Tree"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 1.27686C7.20914 1.27686 9 3.06772 9 5.27686V9.27686C9 10.3814 9.89543 11.2769 11 11.2769H17.1738C17.5859 10.1122 18.6941 9.27686 20 9.27686C21.6569 9.27686 23 10.62 23 12.2769C23 13.9337 21.6569 15.2769 20 15.2769C18.6941 15.2769 17.5859 14.4415 17.1738 13.2769H11C10.2711 13.2769 9.58854 13.0804 9 12.7397V17.2769C9 18.3814 9.89543 19.2769 11 19.2769H17.1738C17.5859 18.1122 18.6941 17.2769 20 17.2769C21.6569 17.2769 23 18.62 23 20.2769C23 21.9337 21.6569 23.2769 20 23.2769C18.6941 23.2769 17.5859 22.4415 17.1738 21.2769H11C8.79086 21.2769 7 19.486 7 17.2769V8.73975C6.41146 9.08039 5.72893 9.27686 5 9.27686C2.79086 9.27686 1 7.48599 1 5.27686C1 3.06772 2.79086 1.27686 5 1.27686ZM20 19.2769C19.4477 19.2769 19 19.7246 19 20.2769C19 20.8291 19.4477 21.2769 20 21.2769C20.5523 21.2769 21 20.8291 21 20.2769C21 19.7246 20.5523 19.2769 20 19.2769ZM20 11.2769C19.4477 11.2769 19 11.7246 19 12.2769C19 12.8291 19.4477 13.2769 20 13.2769C20.5523 13.2769 21 12.8291 21 12.2769C21 11.7246 20.5523 11.2769 20 11.2769ZM5 3.27686C3.89543 3.27686 3 4.17229 3 5.27686C3 6.38142 3.89543 7.27686 5 7.27686C6.10457 7.27686 7 6.38142 7 5.27686C7 4.17229 6.10457 3.27686 5 3.27686Z",
    fill: "#000"
  }));
});
Tree.displayName = 'Tree';