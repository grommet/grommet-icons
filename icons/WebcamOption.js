"use strict";

exports.__esModule = true;
exports.WebcamOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var WebcamOption = exports.WebcamOption = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "WebcamOption"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 6.27686C14.2091 6.27686 16 8.06772 16 10.2769C16 12.486 14.2091 14.2769 12 14.2769C9.79086 14.2769 8 12.486 8 10.2769C8 8.06772 9.79086 6.27686 12 6.27686ZM12 8.27686C10.8954 8.27686 10 9.17229 10 10.2769C10 11.3814 10.8954 12.2769 12 12.2769C13.1046 12.2769 14 11.3814 14 10.2769C14 9.17229 13.1046 8.27686 12 8.27686Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 3.27686C19.866 3.27686 23 6.41086 23 10.2769C23 14.1428 19.866 17.2769 16 17.2769H15V21.2769H16C16.5523 21.2769 17 21.7246 17 22.2769C17 22.8291 16.5523 23.2769 16 23.2769H8C7.44772 23.2769 7 22.8291 7 22.2769C7 21.7246 7.44772 21.2769 8 21.2769H9V17.2769H8C4.13401 17.2769 1 14.1428 1 10.2769C1 6.41086 4.13401 3.27686 8 3.27686H16ZM11 21.2769H13V17.2769H11V21.2769ZM8 5.27686C5.23858 5.27686 3 7.51543 3 10.2769C3 13.0383 5.23858 15.2769 8 15.2769H16C18.7614 15.2769 21 13.0383 21 10.2769C21 7.51543 18.7614 5.27686 16 5.27686H8Z",
    fill: "#000"
  }));
});
WebcamOption.displayName = 'WebcamOption';