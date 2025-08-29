"use strict";

exports.__esModule = true;
exports.TreeNode = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var TreeNode = exports.TreeNode = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "TreeNode"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 1C7.20914 1 9 2.79086 9 5V9C9 10.1046 9.89543 11 11 11H17.1738C17.5859 9.83532 18.6941 9 20 9C21.6569 9 23 10.3431 23 12C23 13.6569 21.6569 15 20 15C18.6941 15 17.5859 14.1647 17.1738 13H11C10.2711 13 9.58854 12.8035 9 12.4629V17C9 18.1046 9.89543 19 11 19H17.1738C17.5859 17.8353 18.6941 17 20 17C21.6569 17 23 18.3431 23 20C23 21.6569 21.6569 23 20 23C18.6941 23 17.5859 22.1647 17.1738 21H11C8.79086 21 7 19.2091 7 17V8.46289C6.41146 8.80354 5.72893 9 5 9C2.79086 9 1 7.20914 1 5C1 2.79086 2.79086 1 5 1ZM20 19C19.4477 19 19 19.4477 19 20C19 20.5523 19.4477 21 20 21C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19ZM20 11C19.4477 11 19 11.4477 19 12C19 12.5523 19.4477 13 20 13C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11ZM5 3C3.89543 3 3 3.89543 3 5C3 6.10457 3.89543 7 5 7C6.10457 7 7 6.10457 7 5C7 3.89543 6.10457 3 5 3Z",
    fill: "#000"
  }));
});
TreeNode.displayName = 'TreeNode';