"use strict";

exports.__esModule = true;
exports.Lastfm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Lastfm = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Lastfm"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#B72024",
    d: "M20.297 10.924c-.21-.069-.413-.132-.609-.194-1.494-.47-2.394-.753-2.394-1.916 0-.943.727-1.627 1.73-1.627.769 0 1.341.319 1.855 1.038.048.067.138.09.213.05l1.507-.768a.162.162 0 0 0 .084-.101.166.166 0 0 0-.014-.131c-.807-1.435-1.972-2.133-3.56-2.133-2.417 0-3.98 1.462-3.98 3.725 0 2.314 1.511 3.25 4.298 4.168 1.616.538 2.33.824 2.33 1.973 0 1.291-1.165 2.22-2.755 2.166-1.666-.056-2.17-.94-2.806-2.386a720.097 720.097 0 0 1-2.307-5.337C12.662 6.621 10.232 5 7.22 5 3.239 5 0 8.239 0 12.22c0 3.98 3.238 7.219 7.219 7.219 2.17 0 4.206-.962 5.582-2.641a.167.167 0 0 0 .025-.173l-.91-2.1a.171.171 0 0 0-.149-.1.165.165 0 0 0-.154.09 4.946 4.946 0 0 1-4.395 2.66 4.96 4.96 0 0 1-4.954-4.955 4.96 4.96 0 0 1 4.954-4.955c1.989 0 3.81 1.18 4.534 2.941l2.251 5.134.26.577c1.017 2.37 2.512 3.432 4.854 3.44 2.784 0 4.883-1.844 4.883-4.29 0-2.457-1.358-3.378-3.703-4.143z"
  }));
});
exports.Lastfm = Lastfm;
Lastfm.displayName = 'Lastfm';