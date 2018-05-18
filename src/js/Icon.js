import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledIcon from './StyledIcon';
import ThemeContext from './ThemeContext';

const SC_CHANNEL = '__styled-components';
const SC_CHANNEL_SHAPE = PropTypes.shape({
  subscribe: PropTypes.func,
  unsubscribe: PropTypes.func,
});

class Icon extends Component {
  static contextTypes = {
    [SC_CHANNEL]: SC_CHANNEL_SHAPE,
  };

  state = {};

  scSubscriptionId = undefined;

  constructor(props, context) {
    super(props, context);
    const styledContext = context[SC_CHANNEL];
    if (styledContext) {
      const { subscribe } = styledContext;
      this.scSubscriptionId = subscribe(theme => this.setState({ theme }));
    }
  }

  componentWillUnmount() {
    const styledContext = this.context[SC_CHANNEL];
    if (this.scSubscriptionId) {
      const { unsubscribe } = styledContext;
      unsubscribe(this.scSubscriptionId);
    }
  }

  render() {
    const {
      a11yTitle, children, ...rest
    } = this.props;
    const { theme: stateTheme } = this.state;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <StyledIcon
            width='24px'
            height='24px'
            viewBox='0 0 24 24'
            version='1.1'
            role='img'
            aria-label={a11yTitle}
            theme={stateTheme || theme}
            {...rest}
          >
            {children}
          </StyledIcon>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Icon;
