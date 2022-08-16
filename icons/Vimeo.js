"use strict";

exports.__esModule = true;
exports.Vimeo = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Vimeo = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Vimeo"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#1AB7EA",
    fillRule: "evenodd",
    d: "M23.988 6.802c-.107 2.336-1.738 5.534-4.894 9.595-3.264 4.24-6.024 6.36-8.282 6.36-1.4 0-2.584-1.29-3.55-3.873-.646-2.368-1.291-4.736-1.938-7.103-.718-2.582-1.488-3.874-2.312-3.874-.18 0-.808.378-1.884 1.13L0 7.583c1.184-1.04 2.352-2.08 3.502-3.123 1.58-1.364 2.767-2.082 3.556-2.155 1.868-.18 3.018 1.097 3.449 3.83.466 2.948.79 4.782.97 5.5.54 2.446 1.132 3.668 1.779 3.668.501 0 1.257-.794 2.262-2.382 1.005-1.586 1.544-2.793 1.616-3.623.144-1.369-.395-2.055-1.616-2.055-.574 0-1.167.132-1.776.393 1.18-3.862 3.433-5.738 6.76-5.632 2.466.073 3.629 1.672 3.486 4.798"
  }));
});
exports.Vimeo = Vimeo;
Vimeo.displayName = 'Vimeo';