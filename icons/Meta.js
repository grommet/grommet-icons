"use strict";

exports.__esModule = true;
exports.Meta = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Meta = exports.Meta = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Meta"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2.562 14.676C2.562 10.747 4.527 6.648 6.832 6.648C8.114 6.648 9.139 7.416 10.762 9.722C9.93805 11.0044 9.11239 12.2858 8.285 13.566C6.235 16.811 5.552 17.495 4.441 17.495C3.331 17.58 2.562 16.555 2.562 14.676ZM15.972 13.224L14.52 10.833C14.178 10.235 13.75 9.637 13.41 9.125C14.69 7.16 15.715 6.135 16.996 6.135C19.559 6.135 21.609 9.979 21.609 14.762C21.609 16.555 21.011 17.58 19.815 17.58C18.619 17.58 18.192 16.811 15.971 13.224H15.972ZM12.299 7.416C10.419 4.94 8.797 4 6.919 4C2.988 4 0 9.21 0 14.676C0 18.093 1.623 20.228 4.356 20.228C6.32 20.228 7.686 19.288 10.249 14.847C10.249 14.847 11.274 12.968 12.043 11.687C12.299 12.114 12.555 12.541 12.811 13.053L14.007 15.103C16.313 19.032 17.594 20.313 19.9 20.313C22.548 20.313 24 18.093 24 14.591C23.915 8.783 20.84 4 17.167 4C15.203 4 13.665 5.537 12.299 7.416Z",
    fill: "#0081FB"
  }));
});
Meta.displayName = 'Meta';