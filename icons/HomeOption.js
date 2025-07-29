"use strict";

exports.__esModule = true;
exports.HomeOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var HomeOption = exports.HomeOption = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "HomeOption"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 1C7.76142 1 10 3.23858 10 6V10.793L12.5586 8.43164C13.6482 7.42587 15.3088 7.36688 16.4668 8.29297L22.625 13.2188C23.0563 13.5638 23.1263 14.1937 22.7812 14.625C22.5839 14.8717 22.2931 14.9988 22 14.999V21C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H4V18.8994C1.71781 18.4361 0 16.4189 0 14V6C0 3.23858 2.23858 1 5 1ZM8 17.999C7.41848 18.436 6.73911 18.7494 6 18.8994V21H8V17.999ZM15.2178 9.85449C14.8318 9.54592 14.2782 9.56615 13.915 9.90137L10 13.5146V21H12V18C12 16.8954 12.8954 16 14 16H16C17.1046 16 18 16.8954 18 18V21H20V14C20 13.9006 20.014 13.8045 20.041 13.7139L15.2178 9.85449ZM14 21H16V18H14V21ZM5 3C3.34315 3 2 4.34315 2 6V14C2 15.3057 2.83548 16.413 4 16.8252V10C4 9.44772 4.44772 9 5 9C5.55228 9 6 9.44772 6 10V16.8252C6.85662 16.522 7.53248 15.8432 7.83105 14.9844C7.62134 14.9485 7.42117 14.847 7.26562 14.6787C6.89116 14.273 6.9159 13.6403 7.32129 13.2656L8 12.6387V6C8 4.34315 6.65685 3 5 3Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.5 1C21.433 1 23 2.567 23 4.5C23 6.433 21.433 8 19.5 8C17.567 8 16 6.433 16 4.5C16 2.567 17.567 1 19.5 1ZM19.5 3C18.6716 3 18 3.67157 18 4.5C18 5.32843 18.6716 6 19.5 6C20.3284 6 21 5.32843 21 4.5C21 3.67157 20.3284 3 19.5 3Z",
    fill: "#000"
  }));
});
HomeOption.displayName = 'HomeOption';