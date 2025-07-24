"use strict";

exports.__esModule = true;
exports.Redo = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Redo = exports.Redo = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Redo"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16.1025 4.03702C16.4687 3.6708 17.0486 3.64803 17.4414 3.96866L17.5175 4.03702L21.6679 8.18741C22.1092 8.6287 22.1092 9.34475 21.6679 9.78605L17.5175 13.9364L17.4414 14.0048C17.0486 14.3254 16.4687 14.3026 16.1025 13.9364C15.7122 13.546 15.7123 12.9129 16.1025 12.5224L18.6259 9.99991H7.95992C7.14182 9.99991 6.34399 10.2536 5.67574 10.7255C3.44199 12.3033 3.44199 15.6164 5.67574 17.1942C6.34399 17.6662 7.14182 17.9198 7.95992 17.9198H9.95797L10.0605 17.9247C10.5649 17.9758 10.958 18.402 10.958 18.9198C10.958 19.4377 10.5649 19.8638 10.0605 19.915L9.95797 19.9198H7.95992C6.7285 19.9198 5.52726 19.5385 4.52144 18.828C1.15952 16.4534 1.15952 11.4664 4.52144 9.09171C5.52726 8.38128 6.7285 7.99991 7.95992 7.99991H18.6523L16.1025 5.45108C15.7123 5.06061 15.7123 4.42749 16.1025 4.03702Z",
    fill: "#000"
  }));
});
Redo.displayName = 'Redo';