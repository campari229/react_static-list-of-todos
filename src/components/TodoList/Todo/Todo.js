import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';

export const Todo = ({ user }) => (user.completed
  ? (
    <div className="list-item__todo list-item__todo--complet">
      {user.title}
    </div>
  )
  : (
    <div className="list-item__todo list-item__todo--in-proces">
      {user.title}
    </div>
  )
);

Todo.propTypes = {
  user: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    user: PropTypes.object,
  }).isRequired,
};
