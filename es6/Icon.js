var _Icon$contextTypes;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledIcon } from './StyledIcon';
import { ThemeContext } from './contexts';

var SC_CHANNEL = '__styled-components';
var SC_CHANNEL_SHAPE = PropTypes.shape({
  subscribe: PropTypes.func,
  unsubscribe: PropTypes.func
});

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon(props, context) {
    _classCallCheck(this, Icon);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.state = {};
    _this.scSubscriptionId = undefined;

    var styledContext = context[SC_CHANNEL];
    if (styledContext) {
      var subscribe = styledContext.subscribe;

      _this.scSubscriptionId = subscribe(function (theme) {
        return _this.setState({ theme: theme });
      });
    }
    return _this;
  }

  Icon.prototype.componentWillUnmount = function componentWillUnmount() {
    var styledContext = this.context[SC_CHANNEL]; // eslint-disable-line
    if (this.scSubscriptionId) {
      var unsubscribe = styledContext.unsubscribe;

      unsubscribe(this.scSubscriptionId);
    }
  };

  Icon.prototype.render = function render() {
    var _props = this.props,
        a11yTitle = _props.a11yTitle,
        children = _props.children,
        color = _props.color,
        rest = _objectWithoutProperties(_props, ['a11yTitle', 'children', 'color']);

    var stateTheme = this.state.theme;

    return React.createElement(
      ThemeContext.Consumer,
      null,
      function (theme) {
        return React.createElement(
          StyledIcon,
          _extends({
            colorProp: color,
            width: '24px',
            height: '24px',
            viewBox: '0 0 24 24',
            version: '1.1',
            role: 'img',
            'aria-label': a11yTitle,
            theme: stateTheme || theme
          }, rest),
          children
        );
      }
    );
  };

  return Icon;
}(Component);

Icon.contextTypes = (_Icon$contextTypes = {}, _Icon$contextTypes[SC_CHANNEL] = SC_CHANNEL_SHAPE, _Icon$contextTypes);


export { Icon };