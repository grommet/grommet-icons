var _Icon$contextTypes;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import deepAssign from 'deep-assign';

import StyledIcon from './StyledIcon';

var SC_CHANNEL = '__styled-components';
var SC_CHANNEL_SHAPE = PropTypes.shape({
  subscribe: PropTypes.func,
  unsubscribe: PropTypes.func
});

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    var _temp, _this, _ret;

    _classCallCheck(this, Icon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      theme: undefined
    }, _this.scSubscriptionId = undefined, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Icon.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var styledContext = this.context[SC_CHANNEL];
    if (styledContext) {
      var subscribe = styledContext.subscribe;

      this.scSubscriptionId = subscribe(function (theme) {
        return _this2.setState({ theme: theme });
      });
    }
  };

  Icon.prototype.componentWillUnmount = function componentWillUnmount() {
    var styledContext = this.context[SC_CHANNEL];
    if (this.scSubscriptionId) {
      var unsubscribe = styledContext.unsubscribe;

      unsubscribe(this.scSubscriptionId);
    }
  };

  Icon.prototype.render = function render() {
    var _props = this.props,
        a11yTitle = _props.a11yTitle,
        children = _props.children,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['a11yTitle', 'children', 'theme']);

    var _context = this.context,
        contextTheme = _context.theme,
        _context$grommet = _context.grommet,
        grommet = _context$grommet === undefined ? {} : _context$grommet;
    var stateTheme = this.state.theme;

    return React.createElement(
      StyledIcon,
      _extends({
        dark: grommet.dark,
        width: '24px',
        height: '24px',
        viewBox: '0 0 24 24',
        version: '1.1',
        role: 'img',
        'aria-label': a11yTitle,
        theme: deepAssign({
          icon: {
            color: '#666666',
            size: {
              large: '48px',
              xlarge: '96px'
            }
          }
        }, contextTheme, stateTheme, theme)
      }, rest),
      children
    );
  };

  return Icon;
}(Component);

Icon.contextTypes = (_Icon$contextTypes = {
  grommet: PropTypes.object,
  theme: PropTypes.object
}, _Icon$contextTypes[SC_CHANNEL] = SC_CHANNEL_SHAPE, _Icon$contextTypes);


export default Icon;