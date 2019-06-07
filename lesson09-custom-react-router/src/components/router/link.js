import React from 'react';
import PropTypes from 'prop-types';
import { historyPush, historyReplace } from '../../lib/router';

const Link = ({ to, replace, children }) => {
  const onClick = e => {
    e.preventDefault();

    replace ? historyReplace(to) : historyPush(to);
  };

  return (
    <a href={to} onClick={onClick}>
      {children}
    </a>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  replace: PropTypes.bool,
  children: PropTypes.any
};

export default Link;
