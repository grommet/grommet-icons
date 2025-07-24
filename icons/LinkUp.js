"use strict";

exports.__esModule = true;
exports.LinkUp = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var LinkUp = exports.LinkUp = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "LinkUp"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.0001 23C12.5523 22.9999 13.0001 22.5522 13.0001 22V4.41406L19.2931 10.707C19.6836 11.0975 20.3166 11.0975 20.7071 10.707C21.0976 10.3165 21.0976 9.68349 20.7071 9.29297L12.0001 0.585938L3.29307 9.29297C2.90255 9.68349 2.90255 10.3165 3.29307 10.707C3.68361 11.0975 4.31664 11.0975 4.70714 10.707L11.0001 4.41406V22C11.0001 22.5522 11.4479 22.9999 12.0001 23Z",
    fill: "#000"
  }));
});
LinkUp.displayName = 'LinkUp';