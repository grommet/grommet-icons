"use strict";

exports.__esModule = true;
exports.Stripe = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Stripe = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Stripe"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#AACBFB",
    fillRule: "evenodd",
    d: "M1 1h22v22H1V1zm10.12 8.19c0-.604.494-.836 1.314-.836 1.174 0 2.658.356 3.833.99V5.71c-1.283-.509-2.55-.71-3.833-.71-3.138 0-5.225 1.639-5.225 4.375 0 4.266 5.874 3.586 5.874 5.425 0 .711-.619.943-1.484.943-1.283 0-2.922-.525-4.22-1.236v3.679c1.437.618 2.89.88 4.22.88 3.215 0 5.426-1.591 5.426-4.358-.016-4.607-5.905-3.788-5.905-5.519z"
  }));
});
exports.Stripe = Stripe;
Stripe.displayName = 'Stripe';