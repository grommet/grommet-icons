"use strict";

exports.__esModule = true;
exports.Right = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Right = exports.Right = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Right"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.29302 1.29302C6.68354 0.902491 7.31655 0.902491 7.70708 1.29302L17.7071 11.293C18.0975 11.6835 18.0976 12.3166 17.7071 12.7071L7.70708 22.7071C7.31658 23.0976 6.68355 23.0975 6.29302 22.7071C5.90249 22.3166 5.90249 21.6835 6.29302 21.293L15.586 12L6.29302 2.70708C5.90249 2.31655 5.90249 1.68354 6.29302 1.29302Z",
    fill: "#000"
  }));
});
Right.displayName = 'Right';