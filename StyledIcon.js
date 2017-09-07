'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SIZE_MAP = {
  'large': (0, _styledComponents.css)(['width:', ';height:', ';'], function (props) {
    return props.theme.icon.size.large;
  }, function (props) {
    return props.theme.icon.size.large;
  }),
  'xlarge': (0, _styledComponents.css)(['width:', ';height:', ';'], function (props) {
    return props.theme.icon.size.xlarge;
  }, function (props) {
    return props.theme.icon.size.xlarge;
  })
};

var StyledIcon = _styledComponents2.default.svg.withConfig({
  displayName: 'StyledIcon'
})(['display:inline-block;flex:0 0 auto;', ' ', ''], function (props) {
  return props.size && SIZE_MAP[props.size];
}, function (props) {
  return props.color !== 'plain' && '\n    fill: ' + props.theme.icon.color + ';\n    stroke: ' + props.theme.icon.color + ';\n\n    g {\n      fill: inherit;\n      stroke: inherit;\n    }\n\n    *:not([stroke]) {\n      &[fill="none"] {\n        stroke-width: 0;\n      }\n    }\n\n    *[stroke*="#"],\n    *[STROKE*="#"] {\n      stroke: inherit;\n      fill: none;\n    }\n\n    *[fill*="#"],\n    *[FILL*="#"] {\n      fill: inherit;\n      stroke: none;\n    }\n  ';
});

exports.default = StyledIcon.extend(_templateObject, function (props) {
  return props.theme.icon && props.theme.icon.extend;
});