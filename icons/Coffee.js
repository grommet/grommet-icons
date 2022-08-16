"use strict";

exports.__esModule = true;
exports.Coffee = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Coffee = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Coffee"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "#000",
    strokeWidth: "2",
    d: "M6.264 20.192c4.096 2.868 8.602-.081 11.47-4.177 2.868-4.095 4.097-9.338.002-12.206-4.096-2.868-8.602.08-11.47 4.176-2.868 4.096-4.098 9.339-.002 12.207z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#000",
    d: "M16.589 5.447c-1.393.246-5.326 2.375-5.408 5.98-.083 3.604-2.787 6.594-3.77 7.126 1.803.042 5.326-2.375 5.408-5.98.083-3.604 2.786-6.594 3.77-7.126z"
  })));
});
exports.Coffee = Coffee;
Coffee.displayName = 'Coffee';