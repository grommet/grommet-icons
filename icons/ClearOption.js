"use strict";

exports.__esModule = true;
exports.ClearOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var ClearOption = exports.ClearOption = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ClearOption"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.3719 2.87019C13.5246 1.70994 15.3941 1.70994 16.5468 2.87019L21.6355 7.99114C22.7882 9.15135 22.7881 11.033 21.6355 12.1933L15.1613 18.7079C15.159 18.7102 15.1577 18.7134 15.1555 18.7156C15.1532 18.7179 15.1501 18.7192 15.1478 18.7214L13.8593 20.0193H15.4438L15.5437 20.0242C16.04 20.0747 16.4277 20.4968 16.4277 21.0097C16.4276 21.5225 16.04 21.9446 15.5437 21.9952L15.4438 22H8.41027C7.62748 22 6.87681 21.6867 6.32329 21.1296L2.36455 17.145C1.21182 15.9848 1.21182 14.1031 2.36455 12.9428L12.3719 2.87019ZM20.3633 19.9961L20.4633 20.0009C20.9596 20.0515 21.3473 20.4736 21.3473 20.9864C21.3471 21.4992 20.9595 21.9204 20.4633 21.971L20.3633 21.9768H19.3794C18.8361 21.9768 18.3957 21.5333 18.3955 20.9864C18.3955 20.4395 18.836 19.9961 19.3794 19.9961H20.3633ZM3.75587 14.3442C3.37178 14.731 3.37168 15.3579 3.75587 15.7446L7.71461 19.7292C7.89909 19.9149 8.14938 20.0193 8.41027 20.0193H10.6692C10.9301 20.0193 11.1804 19.9148 11.3649 19.7292L13.0676 18.0145L6.58848 11.4931L3.75587 14.3442ZM15.1555 4.27059C14.7713 3.88389 14.1484 3.88399 13.7642 4.27059L7.97981 10.0927L14.4589 16.6141L20.2432 10.7929C20.6275 10.4062 20.6275 9.77926 20.2432 9.39251L15.1555 4.27059Z",
    fill: "#000"
  }));
});
ClearOption.displayName = 'ClearOption';