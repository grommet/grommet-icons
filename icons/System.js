"use strict";

exports.__esModule = true;
exports.System = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var System = exports.System = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "System"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 5C12.5523 5 13 5.44772 13 6V6.12598C13.3668 6.22037 13.7131 6.3658 14.0312 6.55371L14.1211 6.46484C14.5116 6.07432 15.1446 6.07432 15.5352 6.46484C15.9256 6.85537 15.9257 7.4884 15.5352 7.87891L15.4453 7.96777C15.6336 8.28625 15.7795 8.63274 15.874 9H16C16.5523 9 17 9.44771 17 10C17 10.5523 16.5523 11 16 11H15.874C15.7796 11.367 15.6334 11.713 15.4453 12.0312L15.5352 12.1211L15.6045 12.1973C15.9247 12.59 15.9012 13.1691 15.5352 13.5352C15.1691 13.9012 14.59 13.9247 14.1973 13.6045L14.1211 13.5352L14.0312 13.4453C13.713 13.6334 13.367 13.7796 13 13.874V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V13.874C10.6327 13.7795 10.2862 13.6336 9.96777 13.4453L9.87891 13.5352C9.4884 13.9257 8.85537 13.9256 8.46484 13.5352C8.07432 13.1446 8.07432 12.5116 8.46484 12.1211L8.55371 12.0312C8.3658 11.7131 8.22037 11.3668 8.12598 11H8C7.44772 11 7 10.5523 7 10C7 9.44771 7.44772 9 8 9H8.12598C8.22045 8.63291 8.36559 8.28613 8.55371 7.96777L8.46484 7.87891L8.39551 7.80273C8.07528 7.40996 8.09877 6.83091 8.46484 6.46484C8.83091 6.09877 9.40996 6.07528 9.80273 6.39551L9.87891 6.46484L9.96777 6.55371C10.2861 6.36559 10.6329 6.22045 11 6.12598V6C11 5.44772 11.4477 5 12 5ZM12 8C10.8953 8 10 8.89528 10 10C10 11.1047 10.8953 12 12 12C13.1047 12 14 11.1047 14 10C14 8.89528 13.1047 8 12 8Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1C21.6569 1 23 2.34315 23 4V16C23 17.6569 21.6569 19 20 19H16.6328L16.8828 21H17C17.5523 21 18 21.4477 18 22C18 22.5523 17.5523 23 17 23H7C6.44772 23 6 22.5523 6 22C6 21.4477 6.44772 21 7 21H7.11719L7.36719 19H4C2.34315 19 1 17.6569 1 16V4C1 2.34315 2.34315 1 4 1H20ZM9.13281 21H14.8672L14.6172 19H9.38281L9.13281 21ZM4 3C3.44772 3 3 3.44772 3 4V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16V4C21 3.44772 20.5523 3 20 3H4Z",
    fill: "#000"
  }));
});
System.displayName = 'System';