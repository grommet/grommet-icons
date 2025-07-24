"use strict";

exports.__esModule = true;
exports.DislikeFill = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var DislikeFill = exports.DislikeFill = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DislikeFill"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.5083 2C12.9169 2.00005 13.3248 2.05031 13.7212 2.14941L16.8335 2.92871C17.3797 2.35757 18.1478 2 19.0005 2H22.0005L22.103 2.00488C22.6069 2.05643 23.0005 2.48248 23.0005 3C23.0005 3.51752 22.6069 3.94357 22.103 3.99512L22.0005 4H19.0005C18.4828 4 18.0567 4.39335 18.0054 4.89746L18.0005 5V13C18.0005 13.5523 18.4482 14 19.0005 14H22.0005L22.103 14.0049C22.6069 14.0564 23.0005 14.4825 23.0005 15C23.0005 15.5175 22.6069 15.9436 22.103 15.9951L22.0005 16H19.0005C18.3696 16 17.7843 15.8043 17.3012 15.4717L14.768 17.3145C14.4719 17.5299 14.1927 17.7686 13.9341 18.0273L13.6821 18.293L10.478 21.8525C9.81025 22.5944 8.78969 22.8994 7.8325 22.6572L7.64207 22.6016C6.03044 22.0643 5.32024 20.1803 6.17625 18.7129L7.75926 16H4.3618C2.508 16 1.09712 14.3354 1.40183 12.5068L2.45652 6.17773L2.49949 5.9541C2.98943 3.65849 5.02129 2 7.38914 2H12.5083Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20.103 5.00488C20.6069 5.05643 21.0005 5.48248 21.0005 6C21.0005 6.51752 20.6069 6.94357 20.103 6.99512L20.0005 7H19.9009C19.3486 7 18.9009 6.55228 18.9009 6C18.9009 5.44772 19.3486 5 19.9009 5H20.0005L20.103 5.00488Z",
    fill: "#000"
  }));
});
DislikeFill.displayName = 'DislikeFill';