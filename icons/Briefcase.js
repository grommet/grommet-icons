"use strict";

exports.__esModule = true;
exports.Briefcase = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Briefcase = exports.Briefcase = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Briefcase"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 1C15.6569 1 17 2.34315 17 4V6H18C20.7614 6 23 8.23858 23 11V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V11C1 8.23858 3.23858 6 6 6H7V4C7 2.34315 8.34315 1 10 1H14ZM6 8C4.34315 8 3 9.34315 3 11V18C3 19.6569 4.34315 21 6 21H7V8H6ZM9 21H15V8H9V21ZM17 21H18C19.6569 21 21 19.6569 21 18V11C21 9.34315 19.6569 8 18 8H17V21ZM10 3C9.44772 3 9 3.44772 9 4V6H15V4C15 3.44772 14.5523 3 14 3H10Z",
    fill: "#000"
  }));
});
Briefcase.displayName = 'Briefcase';