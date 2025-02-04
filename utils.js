"use strict";

exports.__esModule = true;
exports.deepMerge = deepMerge;
exports.generatePrefix = exports["default"] = void 0;
exports.iconPad = iconPad;
exports.isObject = isObject;
exports.parseMetricToNum = void 0;
exports.useScaleProps = useScaleProps;
var _react = require("react");
var _styledComponents = require("styled-components");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}
function deepMerge(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  if (!sources.length) {
    return target;
  }
  // making sure to not change target (immutable)
  var output = _extends({}, target);
  sources.forEach(function (source) {
    if (isObject(source)) {
      Object.keys(source).forEach(function (key) {
        if (isObject(source[key])) {
          if (!output[key]) {
            output[key] = _extends({}, source[key]);
          } else {
            output[key] = deepMerge(output[key], source[key]);
          }
        } else {
          output[key] = source[key];
        }
      });
    }
  });
  return output;
}
var parseMetricToNum = exports.parseMetricToNum = function parseMetricToNum(string) {
  if (string === void 0) {
    string = '';
  }
  return parseFloat(string.match(/\d+(\.\d+)?/), 10);
};

// scaleProps sets path properties to prevent scaling the stroke
// when the theme doesn't want it for small sizes.
function useScaleProps(props) {
  var _theme$icon;
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext);
  var size = props.size;
  var result = {};
  if (theme != null && (_theme$icon = theme.icon) != null && _theme$icon.disableScaleDown) {
    var dimension = parseMetricToNum(theme.icon.size[size] || size);
    if (dimension < 24) result.vectorEffect = 'non-scaling-stroke';
  }
  return result;
}
var calculatePad = function calculatePad(value, iconDimension) {
  return (value - iconDimension) / 2 + "px";
};

// iconPad applies padding to icon to ensure it aligns
// with text line-height or desired width
function iconPad(props) {
  var _theme$icon2, _theme$text, _theme$text2;
  var height = props.height,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    width = props.width;
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext);
  var iconDimension = parseMetricToNum((theme == null || (_theme$icon2 = theme.icon) == null || (_theme$icon2 = _theme$icon2.size) == null ? void 0 : _theme$icon2[size]) || size);
  var style = '';
  // browser default is 16px, but accommodate if app has modified
  // include fallback in case window is undefined
  var FALLBACK = '16px';
  var rootFontSize = parseMetricToNum(FALLBACK);
  if (typeof window !== 'undefined') {
    var _window;
    rootFontSize = parseMetricToNum(((_window = window) == null ? void 0 : _window.getComputedStyle(document.body).getPropertyValue('font-size')) || FALLBACK);
  }
  if (height && theme != null && (_theme$text = theme.text) != null && (_theme$text = _theme$text[height]) != null && _theme$text.height) {
    // the unit on theme text
    var _theme$text$height$he = theme.text[height].height.match(/(px|rem)/),
      unit = _theme$text$height$he[0];
    var lineHeight = parseMetricToNum(theme.text[height].height);
    if (unit === 'rem') lineHeight *= rootFontSize;
    if (lineHeight > iconDimension) {
      var pad = calculatePad(lineHeight, iconDimension);
      style += "padding-top: " + pad + "; padding-bottom: " + pad + ";";
    }
  }
  if (width && theme != null && (_theme$text2 = theme.text) != null && (_theme$text2 = _theme$text2[width]) != null && _theme$text2.height) {
    // the unit on theme text
    var _theme$text$width$hei = theme.text[width].height.match(/(px|rem)/),
      _unit = _theme$text$width$hei[0];
    var desiredWidth = parseMetricToNum(theme.text[width].height);
    if (_unit === 'rem') desiredWidth *= rootFontSize;
    if (desiredWidth > iconDimension) {
      var _pad = calculatePad(desiredWidth, iconDimension);
      style += "padding-left: " + _pad + "; padding-right: " + _pad + ";";
    }
  }
  return style;
}

// ensure icons that rely on urls don't have id collision
// Date.now + Math.random is unique enough for icon use cases
var generatePrefix = exports.generatePrefix = function generatePrefix(name) {
  return "_grommeticons-" + name + "-" + (
  // don't include time-based/random id generation in snapshot tests to avoid
  // needing to update snapshots with every commit
  process.env.NODE_ENV !== 'test' ? Date.now() + Math.random() : '');
};
var _default = exports["default"] = {
  deepMerge: deepMerge,
  isObject: isObject,
  parseMetricToNum: parseMetricToNum,
  iconPad: iconPad,
  useScaleProps: useScaleProps
};