"use strict";

exports.__esModule = true;
exports.Pause = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Pause = exports.Pause = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Pause"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 1C8.20914 1 10 2.79086 10 5V19C10 21.2091 8.20914 23 6 23C3.79086 23 2 21.2091 2 19V5C2 2.79086 3.79086 1 6 1ZM6 3C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19V5C8 3.89543 7.10457 3 6 3Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1C20.2091 1 22 2.79086 22 5V19C22 21.2091 20.2091 23 18 23C15.7909 23 14 21.2091 14 19V5C14 2.79086 15.7909 1 18 1ZM18 3C16.8954 3 16 3.89543 16 5V19C16 20.1046 16.8954 21 18 21C19.1046 21 20 20.1046 20 19V5C20 3.89543 19.1046 3 18 3Z",
    fill: "#000"
  }));
});
Pause.displayName = 'Pause';