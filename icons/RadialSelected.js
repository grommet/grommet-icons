"use strict";

exports.__esModule = true;
exports.RadialSelected = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var RadialSelected = exports.RadialSelected = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "RadialSelected"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 6.45361C15.3137 6.45361 18 9.1399 18 12.4536C18 15.7673 15.3137 18.4536 12 18.4536C8.68629 18.4536 6 15.7673 6 12.4536C6 9.1399 8.68629 6.45361 12 6.45361Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 0.453613C18.6274 0.453613 24 5.8262 24 12.4536C24 19.081 18.6274 24.4536 12 24.4536C5.37258 24.4536 0 19.081 0 12.4536C0 5.8262 5.37258 0.453613 12 0.453613ZM12 2.45361C6.47715 2.45361 2 6.93077 2 12.4536C2 17.9765 6.47715 22.4536 12 22.4536C17.5228 22.4536 22 17.9765 22 12.4536C22 6.93077 17.5228 2.45361 12 2.45361Z",
    fill: "#000"
  }));
});
RadialSelected.displayName = 'RadialSelected';