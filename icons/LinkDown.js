"use strict";

exports.__esModule = true;
exports.LinkDown = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var LinkDown = exports.LinkDown = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "LinkDown"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.0001 1C12.5523 1.00006 13.0001 1.44778 13.0001 2V19.5859L19.2931 13.293C19.6836 12.9025 20.3166 12.9025 20.7071 13.293C21.0976 13.6835 21.0976 14.3165 20.7071 14.707L12.0001 23.4141L3.29307 14.707C2.90255 14.3165 2.90255 13.6835 3.29307 13.293C3.68361 12.9025 4.31664 12.9025 4.70714 13.293L11.0001 19.5859V2C11.0001 1.44779 11.4479 1.00007 12.0001 1Z",
    fill: "#000"
  }));
});
LinkDown.displayName = 'LinkDown';