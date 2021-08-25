"use strict";

exports.__esModule = true;
exports.Apple = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Apple = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Apple"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#AAA",
    fillRule: "evenodd",
    d: "M15.3 3.832c.84-1.014 1.404-2.427 1.25-3.832-1.208.049-2.67.805-3.535 1.819-.777.898-1.457 2.335-1.273 3.712 1.346.105 2.722-.684 3.56-1.699m3.02 8.918c.034 3.632 3.186 4.841 3.22 4.857-.025.085-.502 1.722-1.66 3.413-1 1.462-2.038 2.919-3.674 2.949-1.607.029-2.123-.953-3.961-.953-1.836 0-2.41.923-3.932.982-1.578.06-2.78-1.581-3.79-3.037-2.06-2.98-3.635-8.42-1.52-12.092C4.054 7.045 5.932 5.89 7.97 5.861c1.55-.03 3.013 1.043 3.96 1.043.948 0 2.726-1.29 4.595-1.101.783.033 2.979.316 4.39 2.381-.114.07-2.621 1.53-2.594 4.566"
  }));
});
exports.Apple = Apple;
Apple.displayName = 'Apple';