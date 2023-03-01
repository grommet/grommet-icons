function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
export function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}
export function deepMerge(target) {
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
export var parseMetricToNum = function parseMetricToNum(string) {
  if (string === void 0) {
    string = '';
  }
  return parseFloat(string.match(/\d+(\.\d+)?/), 10);
};

// scaleProps sets path properties to prevent scaling the stroke
// when the theme doesn't want it for small sizes.
export function useScaleProps(props) {
  var _theme$icon;
  var theme = useContext(ThemeContext);
  var size = props.size;
  var result = {};
  if (theme != null && (_theme$icon = theme.icon) != null && _theme$icon.disableScaleDown) {
    var dimension = parseMetricToNum(theme.icon.size[size] || size);
    if (dimension < 24) result.vectorEffect = 'non-scaling-stroke';
  }
  return result;
}

// iconPad applies top/bottom padding to icon to ensure it aligns
// with text line-height
export function iconPad(props) {
  var _theme$text, _theme$text$height;
  var height = props.height,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size;
  var theme = useContext(ThemeContext);
  var style = '';
  if (theme != null && (_theme$text = theme.text) != null && (_theme$text$height = _theme$text[height]) != null && _theme$text$height.height) {
    var _theme$icon2, _theme$icon2$size, _theme$text2, _theme$text2$height;
    var dimension = parseMetricToNum(((_theme$icon2 = theme.icon) == null ? void 0 : (_theme$icon2$size = _theme$icon2.size) == null ? void 0 : _theme$icon2$size[size]) || size);
    var lineHeight = parseMetricToNum(theme == null ? void 0 : (_theme$text2 = theme.text) == null ? void 0 : (_theme$text2$height = _theme$text2[height]) == null ? void 0 : _theme$text2$height.height);
    if (lineHeight > dimension) {
      var pad = (lineHeight - dimension) / 2 + "px";
      style += "padding-top: " + pad + "; padding-bottom: " + pad + ";";
    }
  }
  return style;
}
export default {
  deepMerge: deepMerge,
  isObject: isObject,
  parseMetricToNum: parseMetricToNum,
  iconPad: iconPad,
  useScaleProps: useScaleProps
};