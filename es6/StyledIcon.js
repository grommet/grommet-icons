var _excluded = ["a11yTitle", "color", "size", "theme"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { defaultProps } from './default-props';
import { iconPad, parseMetricToNum } from './utils';

// Returns the specific color that should be used according to the theme.
// If 'dark' is supplied, it takes precedence over 'theme.dark'.
// Can return undefined.
var normalizeColor = function normalizeColor(color, theme, dark) {
  var colorSpec = theme.global && theme.global.colors[color] !== undefined ? theme.global.colors[color] : color;
  // If the color has a light or dark object, use that
  var result = colorSpec;
  if (colorSpec) {
    if ((dark === true || dark === undefined && theme.dark) && colorSpec.dark !== undefined) {
      result = colorSpec.dark;
    } else if ((dark === false || !theme.dark) && colorSpec.light !== undefined) {
      result = colorSpec.light;
    }
  }
  // allow one level of indirection in color names
  if (result && theme.global && theme.global.colors[result] !== undefined) {
    result = normalizeColor(result, theme, dark);
  }
  return result;
};
var colorStyle = function colorStyle(name, value, theme, required) {
  return css(["", ":", ";"], name, normalizeColor(value, theme, required));
};
var colorCss = css(["", " ", " g{fill:inherit;stroke:inherit;}*:not([stroke]){&[fill='none']{stroke-width:0;}}*[stroke*='#'],*[STROKE*='#']{stroke:inherit;fill:none;}*[fill-rule],*[FILL-RULE],*[fill*='#'],*[FILL*='#']{fill:inherit;stroke:none;}"], function (props) {
  return colorStyle('fill', props.color || props.theme.global.colors.icon, props.theme);
}, function (props) {
  return colorStyle('stroke', props.color || props.theme.global.colors.icon, props.theme);
});
var IconInner = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
    color = _ref.color,
    size = _ref.size,
    theme = _ref.theme,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    "aria-label": a11yTitle
  }, rest));
});
IconInner.displayName = 'Icon';
var StyledIcon = styled(IconInner).withConfig({
  // don't let height attribute leak to DOM
  // https://styled-components.com/docs/api#shouldforwardprop
  shouldForwardProp: function shouldForwardProp(prop) {
    return !['height', 'width'].includes(prop);
  }
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-ofa7kd-0"
})(["display:inline-block;flex:0 0 auto;", " ", " ", " ", ""], function (_ref2) {
  var _size$match;
  var _ref2$size = _ref2.size,
    sizeProp = _ref2$size === void 0 ? 'medium' : _ref2$size,
    theme = _ref2.theme,
    viewBox = _ref2.viewBox;
  var _split = (viewBox || '0 0 24 24').split(' '),
    w = _split[2],
    h = _split[3];
  var scale = w / h;
  var size = theme.icon.size[sizeProp] || sizeProp;
  var dimension = parseMetricToNum(size);
  // grab rem, em, px value from resolved size value
  var unit = ((_size$match = size.match(/[a-z]+$/)) == null ? void 0 : _size$match[0]) || 'px';
  if (w < h) {
    return "\n      width: " + dimension + unit + ";\n      height: " + dimension / scale + unit + ";\n    ";
  }
  if (h < w) {
    return "\n      width: " + dimension * scale + unit + ";\n      height: " + dimension + unit + ";\n    ";
  }
  return "\n      width: " + dimension + unit + ";\n      height: " + dimension + unit + ";\n    ";
}, function (_ref3) {
  var color = _ref3.color;
  return color !== 'plain' && colorCss;
}, function (props) {
  return (props.height || props.width) && iconPad(props);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme && theme.icon.extend;
});
StyledIcon.defaultProps = {};
Object.setPrototypeOf(StyledIcon.defaultProps, defaultProps);
export { StyledIcon };