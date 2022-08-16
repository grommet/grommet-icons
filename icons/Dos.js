"use strict";

exports.__esModule = true;
exports.Dos = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Dos = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Dos"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#333",
    fillRule: "evenodd",
    d: "m0 4.546 4.934-.124c.958-.02 1.844.082 2.74.392v.175C6.9 5.648 6.345 6.43 5.84 7.306l-2.997.021.02 8.498 1.772.123 1.813-.02c1.082-.011 2.08-1.741 2.174-2.679l.267-2.955c.114-1.298.865-2.297 2.03-2.833.73 1.226 1.05 2.585 1.05 4.017 0 4.501-2.791 7.344-7.19 7.18L0 18.471V4.546zm20.704 4.172c-.237-1.37-1.38-2.05-2.75-2.05-.938 0-2.473.411-2.524 1.586-.01.062 0 .113.02.165l.557 1.596c.113.33.134.69.134 1.04 0 .402-.052.804-.103 1.206-1.978-.556-3.369-1.514-3.369-3.74 0-2.997 2.421-4.398 5.181-4.398 3.07 0 5.47 1.432 5.666 4.595h-2.812zm-8.24 5.366 2.75.02c.288 1.762 1.452 2.246 3.182 2.246 1.082 0 2.699-.257 2.699-1.638 0-.72-.567-1.092-1.143-1.41l.144-2.75c2.194.596 3.904 1.42 3.904 3.995 0 3.05-2.905 4.337-5.583 4.337-1.916 0-4.398-.556-5.418-2.369-.32-.556-.618-1.277-.618-1.926a.78.78 0 0 1 .02-.155l.062-.35zm7.24-2.627c0 1.576-.422 3.049-1.143 4.43-.185.01-.37.03-.556.03-.597 0-2.05-.401-2.05-1.133 0-.123.02-.247.062-.36l.546-1.823c.113-.36.072-.794.072-1.154 0-1.411-.639-2.297-.69-3.265-.03-.68 1.257-1 1.71-1 .309 0 .618 0 .927.031a8.49 8.49 0 0 1 1.123 4.244zM10.61 17.03l.648-.927 1.082.02c.515 1.123 1.36 1.885 2.39 2.545a7.166 7.166 0 0 1-2.277.37c-1.143 0-2.215-.257-3.275-.659l1.432-1.35zm1.926-10.321a8.19 8.19 0 0 0-.495-.02c-1.74 0-3.327 1.523-3.533 3.233l-.453 3.719c-.062.525-.515 1.06-.855 1.442-.288.309-.628.37-1.05.37h-.052a9.589 9.589 0 0 1-.814-3.862C5.284 7.358 7.654 4 12.062 4c.865 0 1.689.165 2.502.391-.864.639-1.544 1.35-2.028 2.318z"
  }));
});
exports.Dos = Dos;
Dos.displayName = 'Dos';