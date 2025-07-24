"use strict";

exports.__esModule = true;
exports.LinkPrevious = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var LinkPrevious = exports.LinkPrevious = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "LinkPrevious"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9.29297 3.29307C9.68349 2.90255 10.3165 2.90255 10.707 3.29307C11.0975 3.6836 11.0975 4.31662 10.707 4.70714L4.41406 11.0001H22C22.5522 11.0001 22.9999 11.4479 23 12.0001C23 12.5524 22.5523 13.0001 22 13.0001H4.41406L10.707 19.2931C11.0975 19.6836 11.0975 20.3166 10.707 20.7071C10.3165 21.0976 9.68348 21.0976 9.29297 20.7071L0.585938 12.0001L9.29297 3.29307Z",
    fill: "#000"
  }));
});
LinkPrevious.displayName = 'LinkPrevious';