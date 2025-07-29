"use strict";

exports.__esModule = true;
exports.New = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var New = exports.New = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "New"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.9998 1C12.5521 1 12.9998 1.44772 12.9998 2V10.1309L20.4452 5.16797C20.9047 4.86163 21.5255 4.98584 21.8319 5.44531C22.1382 5.90484 22.0141 6.52568 21.5545 6.83203L13.8026 12L21.5545 17.168L21.6366 17.2285C22.028 17.5508 22.1192 18.1238 21.8319 18.5547C21.5447 18.9854 20.981 19.1218 20.533 18.8848L20.4452 18.832L12.9998 13.8682V22C12.9998 22.5523 12.5521 23 11.9998 23C11.4476 22.9999 10.9998 22.5522 10.9998 22V13.8682L3.55453 18.832C3.09501 19.1383 2.47414 19.0142 2.16781 18.5547C1.86153 18.0952 1.98573 17.4743 2.44515 17.168L10.1971 12L2.44515 6.83203L2.36312 6.77148C1.97177 6.44922 1.8806 5.8762 2.16781 5.44531C2.45497 5.01457 3.0187 4.87829 3.46664 5.11523L3.55453 5.16797L10.9998 10.1309V2C10.9998 1.44776 11.4476 1.00008 11.9998 1Z",
    fill: "#000"
  }));
});
New.displayName = 'New';