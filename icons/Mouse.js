"use strict";

exports.__esModule = true;
exports.Mouse = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Mouse = exports.Mouse = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Mouse"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 1.27686C17.7614 1.27686 20 3.51543 20 6.27686V15.2769C20 19.6951 16.4183 23.2769 12 23.2769C7.58172 23.2769 4 19.6951 4 15.2769V6.27686C4 3.51543 6.23858 1.27686 9 1.27686H15ZM6 15.2769C6 18.5906 8.68629 21.2769 12 21.2769C15.3137 21.2769 18 18.5906 18 15.2769V11.2769H6V15.2769ZM9 3.27686C7.34315 3.27686 6 4.62 6 6.27686V9.27686H11V3.27686H9ZM13 9.27686H18V6.27686C18 4.62 16.6569 3.27686 15 3.27686H13V9.27686Z",
    fill: "#000"
  }));
});
Mouse.displayName = 'Mouse';