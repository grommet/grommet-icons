"use strict";

exports.__esModule = true;
exports.Emoji = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Emoji = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Emoji"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 1.73A10.27 10.27 0 1 0 22.24 12 10.25 10.25 0 0 0 12 1.73zM21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8.8 11.05a1.55 1.55 0 1 0-1.51-1.5 1.56 1.56 0 0 0 1.51 1.5zm6.64 0a1.55 1.55 0 1 0 0-3.09 1.53 1.53 0 0 0-1.51 1.59 1.51 1.51 0 0 0 1.51 1.5zm-3.25 5.3A6.58 6.58 0 0 1 6.9 13.5a5.71 5.71 0 0 0 5.3 4 5.54 5.54 0 0 0 5.31-4 6.27 6.27 0 0 1-5.32 2.85z"
  }));
});
exports.Emoji = Emoji;
Emoji.displayName = 'Emoji';