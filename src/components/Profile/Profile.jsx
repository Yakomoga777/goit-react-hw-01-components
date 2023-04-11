import React from 'react';
import css from './Profile.module.css';
import Description from 'components/Profile/Description/Description';

import user from '../../user.json';

// Прописуємо функцію КОМПОНЕНТА

export default function Profile() {
  return (
    <div className={css.profile}>
      {
        <Description
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
        />
      }
    </div>
  );
}

console.log(Profile);
