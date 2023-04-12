import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendItem from './FriendItem/FriendItem';
import friends from '../../friends.json';

export default function FriendList({ items = friends }) {
  return (
    <ul className={css.friendList}>
      {items.map(friend => (
        <FriendItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
