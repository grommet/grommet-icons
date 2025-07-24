"use strict";

exports.__esModule = true;
exports.Descending = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Descending = exports.Descending = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Descending"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.0002 3C12.5523 3.00016 13.0002 3.44782 13.0002 4V17.5859L16.0929 14.4932C16.4835 14.1026 17.1165 14.1027 17.507 14.4932C17.8974 14.8837 17.8975 15.5167 17.507 15.9072L12.0002 21.4141L6.49334 15.9072C6.10282 15.5167 6.10283 14.8837 6.49334 14.4932C6.88386 14.1027 7.51691 14.1027 7.9074 14.4932L11.0002 17.5859V4C11.0002 3.44773 11.4479 3.00002 12.0002 3Z",
    fill: "#000"
  }));
});
Descending.displayName = 'Descending';