"use strict";

exports.__esModule = true;
exports.Flows = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Flows = exports.Flows = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Flows"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 13C21.2091 13 23 14.7909 23 17V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V17C1 14.7909 2.79086 13 5 13H19ZM5 15C3.89543 15 3 15.8954 3 17V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V17C21 15.8954 20.1046 15 19 15H5Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 1C21.2091 1 23 2.79086 23 5V7C23 9.20914 21.2091 11 19 11H5C2.79086 11 1 9.20914 1 7V5C1 2.79086 2.79086 1 5 1H19ZM5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H19C20.1046 9 21 8.10457 21 7V5C21 3.89543 20.1046 3 19 3H5Z",
    fill: "#000"
  }));
});
Flows.displayName = 'Flows';