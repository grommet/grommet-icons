"use strict";

exports.__esModule = true;
exports.RestroomMen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var RestroomMen = exports.RestroomMen = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "RestroomMen"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.0004 6C13.239 6.00009 13.4697 6.08594 13.6508 6.24121L20.6508 12.2412C21.0698 12.6006 21.1183 13.2312 20.7592 13.6504C20.3999 14.0696 19.7684 14.118 19.3491 13.7588L14.1567 9.30664L14.9985 21.9336C15.0351 22.4845 14.6177 22.9611 14.0668 22.998C13.5158 23.0347 13.0391 22.6174 13.0024 22.0664L12.5317 15H11.4692L10.9985 22.0664C10.9618 22.6173 10.4849 23.0345 9.93403 22.998C9.38301 22.9613 8.96572 22.4846 9.00239 21.9336L9.84321 9.30664L4.65082 13.7588C4.23156 14.1182 3.60109 14.0695 3.24164 13.6504C2.88222 13.2311 2.93072 12.6006 3.35004 12.2412L10.35 6.24121L10.4194 6.18555C10.5882 6.06516 10.7916 6 11.0004 6H13.0004Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.0004 1C13.1048 1.00021 14.0004 1.89556 14.0004 3C14.0004 4.10444 13.1048 4.99979 12.0004 5C10.8959 5 10.0004 4.10457 10.0004 3C10.0004 1.89543 10.8959 1 12.0004 1Z",
    fill: "#000"
  }));
});
RestroomMen.displayName = 'RestroomMen';