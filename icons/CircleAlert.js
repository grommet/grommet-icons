"use strict";

exports.__esModule = true;
exports.CircleAlert = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var CircleAlert = exports.CircleAlert = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CircleAlert"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 16.354C12.5523 16.354 13 16.8017 13 17.354V17.4536C13 18.0059 12.5523 18.4536 12 18.4536C11.4477 18.4536 11 18.0059 11 17.4536V17.354C11 16.8017 11.4477 16.354 12 16.354Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 6.95361C12.5523 6.95361 13 7.40133 13 7.95361V13.9536C13 14.5059 12.5523 14.9536 12 14.9536C11.4477 14.9536 11 14.5059 11 13.9536V7.95361C11 7.40133 11.4477 6.95361 12 6.95361Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1.45361C18.0751 1.45361 23 6.37848 23 12.4536C23 18.5287 18.0751 23.4536 12 23.4536C5.92487 23.4536 1 18.5287 1 12.4536C1 6.37848 5.92487 1.45361 12 1.45361ZM12 3.45361C7.02944 3.45361 3 7.48305 3 12.4536C3 17.4242 7.02944 21.4536 12 21.4536C16.9706 21.4536 21 17.4242 21 12.4536C21 7.48305 16.9706 3.45361 12 3.45361Z",
    fill: "#000"
  }));
});
CircleAlert.displayName = 'CircleAlert';