"use strict";

exports.__esModule = true;
exports.Wheelchair = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Wheelchair = exports.Wheelchair = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Wheelchair"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11 1C12.1046 1 13 1.89543 13 3C13 4.10457 12.1046 5 11 5V8H15C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10H11V11H17C17.4303 11 17.812 11.2754 17.9482 11.6836L19.7207 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H19C18.5697 19 18.188 18.7246 18.0518 18.3164L16.2793 13H10C9.44772 13 9 12.5523 9 12V10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20C11.7614 20 14 17.7614 14 15C14 14.4477 14.4477 14 15 14C15.5523 14 16 14.4477 16 15C16 18.866 12.866 22 9 22C5.13401 22 2 18.866 2 15C2 11.134 5.13401 8 9 8V3C9 1.89543 9.89543 1 11 1Z",
    fill: "#000"
  }));
});
Wheelchair.displayName = 'Wheelchair';