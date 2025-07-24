"use strict";

exports.__esModule = true;
exports.Archive = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Archive = exports.Archive = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Archive"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15 9C16.1046 9 17 9.89543 17 11C17 12.1046 16.1046 13 15 13H9C7.89543 13 7 12.1046 7 11C7 9.89543 7.89543 9 9 9H15Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21 1C22.1046 1 23 1.89543 23 3V5C23 5.73976 22.5971 6.3835 22 6.72949V19C22 21.2091 20.2091 23 18 23H6C3.79086 23 2 21.2091 2 19V6.72949C1.4029 6.3835 1 5.73976 1 5V3C1 1.89543 1.89543 1 3 1H21ZM4 19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V7H4V19ZM3 5H21V3H3V5Z",
    fill: "#000"
  }));
});
Archive.displayName = 'Archive';