"use strict";

exports.__esModule = true;
exports.Redhat = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Redhat = exports.Redhat = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Redhat"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.83246 6.12541C6.47698 3.72125 7.3632 2.75958 8.49112 3.24042C10.183 3.96166 10.9081 3.72125 11.6332 3.24042C12.1166 2.91986 12.8416 2.91986 13.8084 3.24042L17.1922 4.68291C18.159 5.00347 18.8035 6.12541 19.1258 8.04874C19.448 9.97207 19.6897 11.2543 19.8508 11.8954C22.2678 12.8571 23.6374 14.2996 23.9597 16.2229C24.4431 19.1079 20.5759 21.9929 12.6 20.5504C4.62398 19.1079 -0.451645 14.54 0.0317476 11.8954C0.354009 10.1323 1.88475 9.25082 4.62398 9.25082L5.83246 6.12541Z",
    fill: "#EE0000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.88726 8.53845C6.34895 11.0452 9.02872 12.6119 12.9266 13.2385C16.8244 13.8652 19.0982 13.2385 19.7478 11.3585C20.0254 12.7752 20.0254 13.7152 19.7478 14.1786C18.8332 15.7049 16.3358 16.1465 13.6574 15.8236C9.75957 15.3536 6.91738 14.1002 5.13087 12.0635C4.64364 11.4368 4.40002 10.8885 4.40002 10.4185C4.40002 9.94848 4.56243 9.3218 4.88726 8.53845Z",
    fill: "black"
  }));
});
Redhat.displayName = 'Redhat';