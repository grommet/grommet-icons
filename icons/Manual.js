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
    d: "M12 1.45361C14.7613 1.45361 17 3.69233 17 6.45361C17 8.50368 15.7657 10.2649 14 11.0366V15.4536H15.5C16.8807 15.4536 18 16.5729 18 17.9536C18 18.1248 17.983 18.2921 17.9502 18.4536H19.5C20.8807 18.4536 22 19.5729 22 20.9536C22 22.3343 20.8807 23.4536 19.5 23.4536H4.5C3.11929 23.4536 2 22.3343 2 20.9536C2 19.5729 3.11929 18.4536 4.5 18.4536H6.0498C6.01702 18.2921 6 18.1248 6 17.9536C6 16.5729 7.11929 15.4536 8.5 15.4536H10V11.0366C8.23432 10.2649 7 8.50368 7 6.45361C7 3.69233 9.23872 1.45361 12 1.45361ZM4.5 20.4536C4.22386 20.4536 4 20.6775 4 20.9536C4 21.2298 4.22386 21.4536 4.5 21.4536H19.5C19.7761 21.4536 20 21.2298 20 20.9536C20 20.6775 19.7761 20.4536 19.5 20.4536H4.5ZM8.5 17.4536C8.22386 17.4536 8 17.6775 8 17.9536C8 18.2298 8.22386 18.4536 8.5 18.4536H15.5C15.7761 18.4536 16 18.2298 16 17.9536C16 17.6775 15.7761 17.4536 15.5 17.4536H8.5ZM12 3.45361C10.3433 3.45361 9 4.7969 9 6.45361C9 8.11033 10.3433 9.45361 12 9.45361C13.6567 9.45361 15 8.11033 15 6.45361C15 4.7969 13.6567 3.45361 12 3.45361Z",
    fill: "#000"
  }));
});
Manual.displayName = 'Manual';