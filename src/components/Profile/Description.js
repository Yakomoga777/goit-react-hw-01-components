import React from 'react';

import user from '../../user.json';

// Прописуємо функцію КОМПОНЕНТА

export default function Description({ username, tag, location, avatar }) {
  return (
    <div class="description">
      <img src={user.avatar} alt="User avatar" class="avatar" />
      <p class="name">{user.username}</p>
      <p class="tag">{user.tag}</p>
      <p class="location">{user.location}</p>
    </div>
  );
}
