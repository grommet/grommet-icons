"use strict";

exports.__esModule = true;
exports.NetworkSwitch = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var NetworkSwitch = exports.NetworkSwitch = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "NetworkSwitch"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20 21C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3L4 3C3.44772 3 3 3.44772 3 4L3 20C3 20.5523 3.44772 21 4 21H20ZM4 23C2.34315 23 1 21.6569 1 20L1 4C1 2.34315 2.34315 1 4 1L20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.49988 8.49999C9.43288 8.49999 10.9999 10.067 10.9999 12C10.9999 13.1802 11.3716 14.2735 12.0043 15.1694C12.3362 14.3735 12.9999 12.6254 12.9999 12C12.9999 8.96242 10.5374 6.49999 7.49988 6.49999H7.41394L8.20691 5.70702C8.59745 5.31651 8.59743 4.68349 8.20691 4.29296C7.81639 3.9025 7.18336 3.90247 6.79285 4.29296L4.29285 6.79296C4.10531 6.98049 3.99988 7.23477 3.99988 7.49999C3.99988 7.76521 4.10531 8.01948 4.29285 8.20702L6.79285 10.707C7.18336 11.0975 7.81639 11.0975 8.20691 10.707C8.57303 10.3409 8.59567 9.7619 8.27527 9.36913L8.20691 9.29296L7.41394 8.49999H7.49988Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16.5858 15.5H16.4999C15.5859 15.5156 14.4922 15.1445 13.625 13.9961C13.625 13.9961 13.4102 14.5859 13.0703 15.0703C12.7305 15.5547 12.5039 15.7734 12.5039 15.7734C13.5945 16.8991 14.8528 17.4748 16.4999 17.5H16.5858L15.7928 18.2929C15.4024 18.6835 15.4024 19.3165 15.7928 19.707C16.1833 20.0975 16.8164 20.0975 17.2069 19.707L19.7069 17.207C20.0974 16.8165 20.0974 16.1835 19.7069 15.7929L17.2069 13.2929L17.1307 13.2246C16.738 12.9043 16.1589 12.9269 15.7928 13.2929C15.4024 13.6835 15.4024 14.3165 15.7928 14.707L16.5858 15.5Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10.9999 12C10.9999 8.96246 13.4624 6.50006 16.4999 6.5H16.5858L15.7928 5.70703C15.4024 5.31652 15.4024 4.68347 15.7928 4.29296C16.1833 3.90246 16.8164 3.9025 17.2069 4.29296L19.7069 6.79296C20.0974 7.18349 20.0974 7.8165 19.7069 8.20703L17.2069 10.707C16.8164 11.0975 16.1833 11.0975 15.7928 10.707C15.4024 10.3165 15.4024 9.68347 15.7928 9.29296L16.5858 8.5H16.4999C14.5669 8.50006 12.9999 10.067 12.9999 12C12.9999 15.0376 10.5374 17.5 7.49988 17.5H7.41394L8.20691 18.293L8.27527 18.3691C8.59566 18.7619 8.57303 19.3409 8.20691 19.707C7.81639 20.0975 7.18335 20.0975 6.79285 19.707L4.29285 17.207C4.10531 17.0195 3.99988 16.7652 3.99988 16.5C3.99988 16.2348 4.10531 15.9805 4.29285 15.793L6.79285 13.293C7.18335 12.9025 7.81639 12.9025 8.20691 13.293C8.59742 13.6835 8.59744 14.3165 8.20691 14.707L7.41394 15.5H7.49988C9.43287 15.5 10.9999 13.933 10.9999 12Z",
    fill: "#000"
  }));
});
NetworkSwitch.displayName = 'NetworkSwitch';