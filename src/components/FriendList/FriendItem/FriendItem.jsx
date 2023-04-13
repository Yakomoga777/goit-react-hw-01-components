import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendItem.module.css';

export default function FriendItem({ avatar, name, isOnline, id }) {
  let variant = isOnline ? 'online' : 'offline'; // визначення змінної variant
  const icon = ['icon', variant]; // створення масиву з класами
  return (
    <li className={css.friend}>
      <div className={css.friendCard}>
        <p className={css[icon]}></p>
        <img src={avatar} alt={`foto ${name}`}></img>
        <p className={css.name}>{name}</p>
      </div>
    </li>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
