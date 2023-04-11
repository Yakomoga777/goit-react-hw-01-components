import React from 'react';
import PropTypes from 'prop-types';
import css from './Description.module.css';

import Stats from 'components/Profile/Stats/Stats';

import user from '../../../user.json';

// Прописуємо функцію КОМПОНЕНТА

export default function Description({ username, tag, location, avatar }) {
  return (
    <div className={css.description}>
      <img src={user.avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{user.username}</p>
      <p className={css.tag}>{user.tag}</p>
      <p className={css.location}>{user.location}</p>
      <Stats
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
