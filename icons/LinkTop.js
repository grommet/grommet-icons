"use strict";

exports.__esModule = true;
exports.LinkTop = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var LinkTop = exports.LinkTop = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "LinkTop"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.3691 4.22461C11.7619 3.90426 12.3409 3.92685 12.707 4.29297L19.707 11.293C20.0976 11.6835 20.0976 12.3165 19.707 12.707C19.3165 13.0976 18.6835 13.0976 18.293 12.707L13 7.41406V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V7.41406L5.70703 12.707C5.31651 13.0976 4.68349 13.0976 4.29297 12.707C3.90244 12.3165 3.90244 11.6835 4.29297 11.293L11.293 4.29297L11.3691 4.22461Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M22 1C22.5523 1 23 1.44772 23 2C23 2.55228 22.5523 3 22 3H2C1.44772 3 1 2.55228 1 2C1 1.44772 1.44772 1 2 1H22Z",
    fill: "#000"
  }));
});
LinkTop.displayName = 'LinkTop';