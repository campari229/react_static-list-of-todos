import PropTypes from 'prop-types';
import React from 'react';
import { Todo } from './Todo/Todo';
import './TodoList.scss';
import { User } from './User/User';

export const TodoList = ({ todo }) => (
  <ul className="todo-list">
    {todo.map(item => (
      <li className="todo-list__item list-item" key={item.id}>
        <User user={item.user} />
        <Todo user={item} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      completed: PropTypes.bool,
      user: PropTypes.object,
    }).isRequired,
  ).isRequired,
};
