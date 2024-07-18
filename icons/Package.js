"use strict";

exports.__esModule = true;
exports.Package = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Package = exports.Package = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Package"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.371.571 12 .423l-.371.148-10 4L1 4.823v14.354l.629.251 10 4 .371.149.371-.149 10-4 .629-.251V4.823l-.629-.252-10-4zM3 6.977v10.846l8 3.2V10.177l-8-3.2zm10 3.2v10.846l8-3.2V6.977l-8 3.2zM19.307 5.5 12 2.577 9.943 3.4l7.307 2.923 2.057-.823zm-14.614 0L7.25 4.477 14.557 7.4 12 8.423 4.693 5.5z",
    fill: "#000"
  }));
});
Package.displayName = 'Package';