"use strict";

exports.__esModule = true;
exports.Previous = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Previous = exports.Previous = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Previous"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16.293 1.29302C16.6836 0.902491 17.3166 0.902491 17.7071 1.29302C18.0975 1.68355 18.0976 2.31658 17.7071 2.70708L8.41414 12L17.7071 21.293C18.0975 21.6835 18.0976 22.3166 17.7071 22.7071C17.3166 23.0976 16.6836 23.0975 16.293 22.7071L6.29305 12.7071C5.90252 12.3166 5.90252 11.6835 6.29305 11.293L16.293 1.29302Z",
    fill: "#000"
  }));
});
Previous.displayName = 'Previous';