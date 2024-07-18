"use strict";

exports.__esModule = true;
exports.Meta = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Meta = exports.Meta = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Meta"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#0081FB",
    d: "M2.562 14.676c0-3.929 1.965-8.028 4.27-8.028 1.282 0 2.307.768 3.93 3.074a1702.683 1702.683 0 0 1-2.477 3.844c-2.05 3.245-2.733 3.929-3.844 3.929-1.11.085-1.879-.94-1.879-2.819Zm13.41-1.452-1.452-2.391c-.342-.598-.77-1.196-1.11-1.708 1.28-1.965 2.305-2.99 3.586-2.99 2.563 0 4.613 3.844 4.613 8.627 0 1.793-.598 2.818-1.794 2.818-1.196 0-1.623-.769-3.844-4.356Zm-3.673-5.808C10.419 4.94 8.797 4 6.919 4 2.988 4 0 9.21 0 14.676c0 3.417 1.623 5.552 4.356 5.552 1.964 0 3.33-.94 5.893-5.381 0 0 1.025-1.879 1.794-3.16.256.427.512.854.768 1.366l1.196 2.05c2.306 3.929 3.587 5.21 5.893 5.21 2.648 0 4.1-2.22 4.1-5.722C23.915 8.783 20.84 4 17.167 4c-1.964 0-3.502 1.537-4.868 3.416Z"
  }));
});
Meta.displayName = 'Meta';