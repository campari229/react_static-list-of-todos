import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ user }) => (
  <p className="list-item__user user">{user.name}</p>
);

User.propTypes = {
  user: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    name: PropTypes.string,
  }).isRequired,
};
