"use strict";

exports.__esModule = true;
exports.LinkBottom = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var LinkBottom = exports.LinkBottom = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "LinkBottom"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M22 21C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H22Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 1C12.5523 1 13 1.44772 13 2V16.5859L18.293 11.293C18.6835 10.9024 19.3165 10.9024 19.707 11.293C20.0976 11.6835 20.0976 12.3165 19.707 12.707L12.707 19.707C12.3165 20.0976 11.6835 20.0976 11.293 19.707L4.29297 12.707C3.90244 12.3165 3.90244 11.6835 4.29297 11.293C4.68349 10.9024 5.31651 10.9024 5.70703 11.293L11 16.5859V2C11 1.44772 11.4477 1 12 1Z",
    fill: "#000"
  }));
});
LinkBottom.displayName = 'LinkBottom';