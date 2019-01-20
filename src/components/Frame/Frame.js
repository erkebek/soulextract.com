import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Component extends React.PureComponent {
  static displayName = 'Frame';

  static propTypes = {
    theme: PropTypes.any.isRequired,
    classes: PropTypes.any.isRequired,
    anim: PropTypes.any.isRequired,
    className: PropTypes.any,
    children: PropTypes.any
  };

  render () {
    const {
      theme,
      classes,
      anim,
      className,
      children,
      ...rest
    } = this.props;

    return (
      <div className={cx(classes.root, className)} {...rest}>
        <div>{anim.status}</div>
        {children}
      </div>
    );
  }
}

export { Component };
