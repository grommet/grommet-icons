"use strict";

exports.__esModule = true;
exports.Organization = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Organization = exports.Organization = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Organization"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 13C14.5523 13 15 13.4477 15 14C15 14.5523 14.5523 15 14 15H6C5.44772 15 5 14.5523 5 14C5 13.4477 5.44772 13 6 13H14Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 9C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H6C5.44772 11 5 10.5523 5 10C5 9.44772 5.44772 9 6 9H14Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 5C14.5523 5 15 5.44772 15 6C15 6.55228 14.5523 7 14 7H6C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5H14Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 1C16.6569 1 18 2.34315 18 4V5H19C20.6569 5 22 6.34315 22 8V21C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21V4C2 2.34315 3.34315 1 5 1H15ZM5 3C4.44772 3 4 3.44772 4 4V21H7V19C7 17.8954 7.89543 17 9 17H11C12.1046 17 13 17.8954 13 19V21H16V4C16 3.44772 15.5523 3 15 3H5ZM9 21H11V19H9V21ZM18 21H20V8C20 7.44772 19.5523 7 19 7H18V21Z",
    fill: "#000"
  }));
});
Organization.displayName = 'Organization';