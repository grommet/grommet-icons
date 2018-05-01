import React, { Component } from 'react';
import PropTypes from 'prop-types';
import deepAssign from 'deep-assign';

import StyledIcon from './StyledIcon';

const SC_CHANNEL = '__styled-components';
const SC_CHANNEL_SHAPE = PropTypes.shape({
  subscribe: PropTypes.func,
  unsubscribe: PropTypes.func,
});

class Icon extends Component {
  static contextTypes = {
    grommet: PropTypes.object,
    theme: PropTypes.object,
    [SC_CHANNEL]: SC_CHANNEL_SHAPE,
  };

  state = {
    theme: undefined,
  };

  scSubscriptionId = undefined;

  componentWillMount() {
    const styledContext = this.context[SC_CHANNEL];
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
      a11yTitle, children, theme, ...rest
    } = this.props;
    const { theme: contextTheme, grommet = {} } = this.context;
    const { theme: stateTheme } = this.state;
    return (
      <StyledIcon
        dark={grommet.dark}
        width='24px'
        height='24px'
        viewBox='0 0 24 24'
        version='1.1'
        role='img'
        aria-label={a11yTitle}
        theme={deepAssign({
          icon: {
            color: '#666666',
            size: {
              large: '48px',
              xlarge: '96px',
            },
          },
        }, contextTheme, stateTheme, theme)}
        {...rest}
      >
        {children}
      </StyledIcon>
    );
  }
}

export default Icon;
