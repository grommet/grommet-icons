"use strict";

exports.__esModule = true;
exports.Fireball = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Fireball = exports.Fireball = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Fireball"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.2887 1.29675C11.677 0.904136 12.3101 0.900718 12.7028 1.28894C13.0954 1.67728 13.0989 2.31031 12.7106 2.703L3.76136 11.7528L3.75746 11.7577C1.4146 14.1008 1.4145 17.899 3.75746 20.2421C6.10052 22.5851 9.89866 22.585 12.2418 20.2421L12.2496 20.2352L17.2994 15.286C17.6938 14.8996 18.3269 14.9056 18.7135 15.2997C19.1 15.694 19.094 16.3271 18.6998 16.7137L13.6559 21.6561L13.6569 21.6571C10.6303 24.6834 5.78158 24.7777 2.64125 21.9403L2.34242 21.6571C-0.781588 18.533 -0.781488 13.4668 2.34242 10.3426L11.2887 1.29675Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.99964 10.9999C10.7611 10.9999 12.9996 13.2384 12.9996 15.9999C12.9996 18.7612 10.761 20.9999 7.99964 20.9999C5.23843 20.9997 2.99973 18.7611 2.99964 15.9999C2.99964 13.2386 5.23838 11.0001 7.99964 10.9999ZM7.99964 12.9999C6.34295 13.0001 4.99964 14.3431 4.99964 15.9999C4.99973 17.6565 6.343 18.9997 7.99964 18.9999C9.65645 18.9999 10.9996 17.6567 10.9996 15.9999C10.9996 14.343 9.6565 12.9999 7.99964 12.9999Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20.2926 12.2928C20.6831 11.9024 21.3161 11.9024 21.7067 12.2928C22.0972 12.6834 22.0972 13.3164 21.7067 13.7069L20.7067 14.7069C20.3161 15.0972 19.6831 15.0973 19.2926 14.7069C18.9023 14.3165 18.9024 13.6834 19.2926 13.2928L20.2926 12.2928Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21.2926 5.29284C21.6831 4.90235 22.3161 4.90242 22.7067 5.29284C23.0972 5.68337 23.0972 6.31638 22.7067 6.7069L15.7067 13.7069C15.3161 14.0972 14.6831 14.0973 14.2926 13.7069C13.9023 13.3165 13.9024 12.6834 14.2926 12.2928L21.2926 5.29284Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.9996 5.99987C13.1042 5.99987 13.9996 6.8953 13.9996 7.99987C13.9996 9.10437 13.1042 9.99987 11.9996 9.99987C10.8953 9.99968 9.99973 9.10425 9.99964 7.99987C9.99964 6.89542 10.8952 6.00007 11.9996 5.99987Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16.2926 4.29284C16.6831 3.90235 17.3161 3.90242 17.7067 4.29284C18.0972 4.68337 18.0972 5.31638 17.7067 5.7069L16.7067 6.7069C16.3161 7.09717 15.6831 7.09734 15.2926 6.7069C14.9023 6.31646 14.9024 5.68335 15.2926 5.29284L16.2926 4.29284Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20.2926 0.292842C20.6831 -0.0976481 21.3161 -0.0975796 21.7067 0.292842C22.0972 0.683366 22.0972 1.31638 21.7067 1.7069L19.7067 3.7069C19.3161 4.09717 18.6831 4.09734 18.2926 3.7069C17.9023 3.31646 17.9024 2.68335 18.2926 2.29284L20.2926 0.292842Z",
    fill: "#000"
  }));
});
Fireball.displayName = 'Fireball';