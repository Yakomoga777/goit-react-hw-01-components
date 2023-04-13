import React from 'react';
import PropTypes from 'prop-types';
import { TiMediaRecord } from 'react-icons/ti';
// import css from './FriendItem.module.css';

import {
  Friend,
  FriendCard,
  FriendImg,
  FriendName,
  IconPlace,
} from './FriendItem.styled';

export default function FriendItem({ avatar, name, isOnline, id }) {
  let variant = isOnline ? 'online' : 'offline'; // визначення змінної variant
  const icon = ['icon', variant]; // створення масиву з класами
  return (
    <Friend>
      <FriendCard>
        <IconPlace isOnline={isOnline}>
          <TiMediaRecord size="40px" />
        </IconPlace>
        <FriendImg src={avatar} alt={`foto ${name}`}></FriendImg>
        <FriendName>{name}</FriendName>
      </FriendCard>
    </Friend>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

// export default function FriendItem({ avatar, name, isOnline, id }) {
//   let variant = isOnline ? 'online' : 'offline'; // визначення змінної variant
//   const icon = ['icon', variant]; // створення масиву з класами
//   return (
//     <li className={css.friend}>
//       <div className={css.friendCard}>
//         <p className={css[icon]}></p>
//         <img src={avatar} alt={`foto ${name}`}></img>
//         <p className={css.name}>{name}</p>
//       </div>
//     </li>
//   );
// }
