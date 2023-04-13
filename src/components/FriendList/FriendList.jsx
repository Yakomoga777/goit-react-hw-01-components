import React from 'react';
import PropTypes from 'prop-types';
// import css from './FriendList.module.css';
import { List } from './FriendList.styled';
import FriendItem from './FriendItem/FriendItem';
import friends from '../../friends.json';

export default function FriendList({ items = friends }) {
  return (
    <List className="friendList">
      {items.map(friend => (
        <FriendItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
