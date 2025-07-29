"use strict";

exports.__esModule = true;
exports.Manual = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Manual = exports.Manual = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Manual"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C14.7613 1 17 3.23872 17 6C17 8.05007 15.7657 9.81133 14 10.583V15H15.5C16.8807 15 18 16.1193 18 17.5C18 17.6712 17.983 17.8385 17.9502 18H19.5C20.8807 18 22 19.1193 22 20.5C22 21.8807 20.8807 23 19.5 23H4.5C3.11929 23 2 21.8807 2 20.5C2 19.1193 3.11929 18 4.5 18H6.0498C6.01702 17.8385 6 17.6712 6 17.5C6 16.1193 7.11929 15 8.5 15H10V10.583C8.23432 9.81133 7 8.05007 7 6C7 3.23872 9.23872 1 12 1ZM4.5 20C4.22386 20 4 20.2239 4 20.5C4 20.7761 4.22386 21 4.5 21H19.5C19.7761 21 20 20.7761 20 20.5C20 20.2239 19.7761 20 19.5 20H4.5ZM8.5 17C8.22386 17 8 17.2239 8 17.5C8 17.7761 8.22386 18 8.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H8.5ZM12 3C10.3433 3 9 4.34328 9 6C9 7.65672 10.3433 9 12 9C13.6567 9 15 7.65672 15 6C15 4.34328 13.6567 3 12 3Z",
    fill: "#000"
  }));
});
Manual.displayName = 'Manual';