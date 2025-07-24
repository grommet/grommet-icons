"use strict";

exports.__esModule = true;
exports.Close = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Close = exports.Close = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Close"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21.293 1.29302C21.6835 0.902492 22.3166 0.902492 22.7071 1.29302C23.0975 1.68355 23.0976 2.31658 22.7071 2.70708L13.4141 12L22.7071 21.293C23.0975 21.6835 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6835 23.0975 21.293 22.7071L12 13.4141L2.70708 22.7071C2.31658 23.0976 1.68355 23.0975 1.29302 22.7071C0.902492 22.3166 0.902492 21.6835 1.29302 21.293L10.586 12L1.29302 2.70708C0.902491 2.31655 0.902491 1.68354 1.29302 1.29302C1.68354 0.902491 2.31655 0.902491 2.70708 1.29302L12 10.586L21.293 1.29302Z",
    fill: "#000"
  }));
});
Close.displayName = 'Close';