"use strict";

exports.__esModule = true;
exports.Gem = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Gem = exports.Gem = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Gem"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.1719 1C15.9674 1.00008 16.7304 1.31637 17.293 1.87891L20.1211 4.70703C20.6836 5.26957 20.9999 6.03259 21 6.82812V17.1719C20.9999 17.9674 20.6836 18.7304 20.1211 19.293L17.293 22.1211C16.7304 22.6836 15.9674 22.9999 15.1719 23H8.66699C8.01788 23 7.3855 22.7899 6.86621 22.4004L4.2002 20.4004C3.44478 19.8338 3 18.9443 3 18V6.82812C3.00008 6.03258 3.31637 5.26957 3.87891 4.70703L6.70703 1.87891C7.26957 1.31637 8.03259 1.00008 8.82812 1H15.1719ZM9 21H15V19H9V21ZM7 20V19H5.66699L7 20ZM17 19.5859L17.5859 19H17V19.5859ZM5 17H7V7H5V17ZM9 7V17H15V7H9ZM17 17H19V7H17V17ZM6.41406 5H7V4.41406L6.41406 5ZM9 5H15V3H9V5ZM17 5H17.5859L17 4.41406V5Z",
    fill: "#000"
  }));
});
Gem.displayName = 'Gem';