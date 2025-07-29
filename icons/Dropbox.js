"use strict";

exports.__esModule = true;
exports.Dropbox = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Dropbox = exports.Dropbox = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Dropbox"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.0599 1L0.00015 5.6095L4.8819 9.5185L12.0001 5.1235L7.0599 1ZM0 13.4281L7.05975 18.0376L12 13.9141L4.8819 9.5185L0 13.4281ZM12 13.9141L16.9401 18.0377L23.9998 13.4282L19.1181 9.51842L12 13.9141ZM24 5.60957L16.9403 1.00007L12.0001 5.1235L19.1181 9.51842L24 5.60957ZM12.0145 14.8013L7.05998 18.9128L4.93972 17.5283V19.08L12.0145 23.3228L19.0892 19.08V17.5283L16.969 18.9128L12.0145 14.8013Z",
    fill: "#007EE5"
  }));
});
Dropbox.displayName = 'Dropbox';