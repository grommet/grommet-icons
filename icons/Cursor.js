"use strict";

exports.__esModule = true;
exports.Cursor = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Cursor = exports.Cursor = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Cursor"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.59766 2.08523C5.9606 1.92565 6.38349 1.99507 6.67578 2.26297L18.6758 13.263C18.9533 13.5174 19.064 13.9062 18.9629 14.2688C18.8616 14.6314 18.5654 14.9068 18.1963 14.9807L14.5283 15.7141L16.8779 20.0218C17.0076 20.2598 17.0351 20.5404 16.9541 20.7991C16.8729 21.058 16.69 21.2735 16.4473 21.3948L13.4473 22.8948C12.9534 23.1417 12.3525 22.9414 12.1055 22.4475L9.64062 17.5188L6.59961 19.8001C6.29664 20.0272 5.89141 20.0641 5.55273 19.8948C5.21401 19.7254 5.00007 19.379 5 19.0003V3.00027L5.01074 2.85379C5.06051 2.51716 5.28002 2.22499 5.59766 2.08523ZM7 17.0003L9.40039 15.2005L9.49219 15.1389C9.71309 15.0087 9.97715 14.9672 10.2295 15.0266C10.5181 15.0948 10.7619 15.2878 10.8945 15.553L13.4473 20.6585L14.625 20.0686L12.1221 15.4788C11.9701 15.1999 11.9595 14.8653 12.0938 14.5774C12.2283 14.2894 12.492 14.0822 12.8037 14.0198L15.8711 13.4055L7 5.27371V17.0003Z",
    fill: "#000"
  }));
});
Cursor.displayName = 'Cursor';