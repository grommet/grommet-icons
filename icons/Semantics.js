"use strict";

exports.__esModule = true;
exports.Semantics = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Semantics = exports.Semantics = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Semantics"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21 1C21.276 1.00001 21.5395 1.1143 21.7285 1.31543C21.9175 1.51662 22.0153 1.78699 21.998 2.0625L20.998 18.0625C20.9758 18.4181 20.766 18.7352 20.4473 18.8945L12.4473 22.8945C12.1657 23.0353 11.8343 23.0353 11.5527 22.8945L3.55273 18.8945C3.234 18.7352 3.02422 18.4181 3.00194 18.0625L2.00194 2.0625C1.98473 1.78699 2.08247 1.51662 2.27148 1.31543C2.46048 1.1143 2.72399 1 2.99999 1H21ZM4.96191 17.3623L12 20.8818L19.0371 17.3623L19.9355 3H4.06444L4.96191 17.3623Z",
    fill: "#000"
  }));
});
Semantics.displayName = 'Semantics';