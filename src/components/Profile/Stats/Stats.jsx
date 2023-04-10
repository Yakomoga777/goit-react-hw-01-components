import css from './Stats.module.css';
import PropTypes from 'prop-types';

import user from '../../../user.json';

//Прописую функцію компонента

export default function Stats({ followers, views, likes }) {
  return (
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{user.stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{user.stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{user.stats.likes}</span>
      </li>
    </ul>
  );
}
console.log(user.likes);
// Прописую типи пропсів
Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
