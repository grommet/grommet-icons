import React, { Component } from 'react';
import PropTypes from 'prop-types';
import deepAssign from 'deep-assign';
import { CHANNEL } from 'styled-components/lib/models/ThemeProvider';

import StyledIcon from './StyledIcon';

class Icon extends Component {
  static contextTypes = {
    theme: PropTypes.object,
    [CHANNEL]: PropTypes.func,
  };

  state = {
    theme: undefined,
  };

  componentWillMount() {
    const subscribe = this.context[CHANNEL];
    if (typeof subscribe === 'function') {
      this.unsubscribe = subscribe(theme => this.setState({ theme }));
    }
  }

  componentWillUnmount() {
    if (typeof this.unsubscribe === 'function') {
      this.unsubscribe();
    }
  }

  render() {
    const { a11yTitle, children, theme, ...rest } = this.props;
    const { theme: contextTheme } = this.context;
    const { theme: stateTheme } = this.state;
    return (
      <StyledIcon
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
