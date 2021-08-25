"use strict";

exports.__esModule = true;
exports.SafariOption = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SafariOption = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "SafariOption"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#87C5F8",
    fillRule: "evenodd",
    d: "M12.541 11.844c.022-.414-.33-.772-.775-.79-.47-.02-.827.325-.835.802-.007.423.337.758.79.772.45.014.795-.317.82-.784m4.673-6.722-.053-.04c-.053.044-.109.087-.16.135-1.914 1.787-3.831 3.571-5.741 5.364a3.48 3.48 0 0 0-.588.696c-1.401 2.307-2.789 4.623-4.179 6.936-.057.094-.102.194-.153.292a.242.242 0 0 0 .172-.069c1.94-1.812 3.883-3.62 5.814-5.443a4.03 4.03 0 0 0 .65-.824c1.371-2.256 2.73-4.521 4.092-6.783.052-.086.098-.176.146-.264m-.07-1.094c1.999 1.394 3.251 3.257 3.89 5.607-.233.057-.45.093-.652.167-.087.032-.145.144-.216.219.094.041.193.124.283.117.206-.02.408-.083.655-.138.45 2.407.068 4.629-1.183 6.729-.195-.118-.357-.242-.537-.317-.12-.05-.266-.033-.4-.045.065.109.11.242.202.323.148.129.327.224.533.36-1.375 2.01-3.215 3.324-5.6 3.961-.07-.266-.121-.526-.212-.773-.033-.09-.157-.147-.241-.22-.026.1-.087.206-.074.3.035.242.103.48.17.774-2.431.453-4.689.095-6.835-1.19.164-.256.33-.483.458-.73.053-.101.025-.244.034-.368-.113.06-.259.095-.332.187-.167.208-.298.446-.47.713-2.039-1.396-3.342-3.275-3.983-5.68.31-.072.574-.12.826-.203.085-.028.14-.146.21-.224-.1-.033-.204-.104-.299-.092-.253.033-.502.1-.797.164-.448-2.44-.062-4.696 1.251-6.829.19.12.354.25.54.334.144.066.314.074.473.108-.096-.14-.172-.3-.294-.412-.145-.131-.33-.219-.525-.343 1.425-1.992 3.285-3.301 5.708-3.895.056.241.087.471.165.683.045.119.165.208.251.31.03-.12.092-.245.08-.362-.022-.22-.087-.434-.145-.698 2.415-.423 4.647-.028 6.751 1.255-.15.242-.302.46-.42.695-.042.082.003.208.008.313.09-.04.208-.056.262-.123.16-.201.293-.422.465-.677M11.845 22.42c5.876-.014 10.586-4.76 10.577-10.659-.008-5.772-4.783-10.507-10.589-10.499C5.936 1.27 1.25 6.01 1.264 11.95c.015 5.752 4.797 10.484 10.581 10.47M11.836 0c6.506-.007 11.845 5.307 11.85 11.794A11.86 11.86 0 0 1 11.86 23.683C5.328 23.715 0 18.378 0 11.8 0 5.303 5.312.007 11.836.001"
  }));
});
exports.SafariOption = SafariOption;
SafariOption.displayName = 'SafariOption';