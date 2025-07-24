"use strict";

exports.__esModule = true;
exports.ObjectGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var ObjectGroup = exports.ObjectGroup = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ObjectGroup"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17 10C17.5523 10 18 10.4477 18 11V17C18 17.5523 17.5523 18 17 18H11C10.4477 18 10 17.5523 10 17V15H12V16H16V12H15V10H17Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 6C13.5523 6 14 6.44772 14 7V13C14 13.5523 13.5523 14 13 14H7C6.44772 14 6 13.5523 6 13V7C6 6.44772 6.44772 6 7 6H13ZM8 12H12V8H8V12Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.5 0C22.8807 0 24 1.11929 24 2.5C24 3.31703 23.6061 4.0399 23 4.49609V19.5029C23.6064 19.9591 24 20.6828 24 21.5C24 22.8807 22.8807 24 21.5 24C20.683 24 19.9601 23.6061 19.5039 23H4.49609C4.0399 23.6061 3.31703 24 2.5 24C1.11929 24 0 22.8807 0 21.5C0 20.6828 0.393628 19.9591 1 19.5029V4.49609C0.393895 4.0399 0 3.31703 0 2.5C0 1.11929 1.11929 0 2.5 0C3.31703 0 4.0399 0.393895 4.49609 1H19.5039C19.9601 0.393895 20.683 0 21.5 0ZM2.5 21C2.22386 21 2 21.2239 2 21.5C2 21.7761 2.22386 22 2.5 22C2.77614 22 3 21.7761 3 21.5C3 21.2239 2.77614 21 2.5 21ZM21.5 21C21.2239 21 21 21.2239 21 21.5C21 21.7761 21.2239 22 21.5 22C21.7761 22 22 21.7761 22 21.5C22 21.2239 21.7761 21 21.5 21ZM4.9502 3C4.75138 3.97953 3.97951 4.75033 3 4.94922V19.0498C3.9796 19.2486 4.75136 20.0204 4.9502 21H19.0498C19.2486 20.0204 20.0204 19.2486 21 19.0498V4.94922C20.0205 4.75033 19.2486 3.97953 19.0498 3H4.9502ZM2.5 2C2.22386 2 2 2.22386 2 2.5C2 2.77614 2.22386 3 2.5 3C2.77614 3 3 2.77614 3 2.5C3 2.22386 2.77614 2 2.5 2ZM21.5 2C21.2239 2 21 2.22386 21 2.5C21 2.77614 21.2239 3 21.5 3C21.7761 3 22 2.77614 22 2.5C22 2.22386 21.7761 2 21.5 2Z",
    fill: "#000"
  }));
});
ObjectGroup.displayName = 'ObjectGroup';