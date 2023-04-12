import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import getRandomHexColor from 'components/utils/getRandomHexColor';

import data from '../../data.json';

export default function Statistics({ items = data, title }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {items.map((item, id) => (
          <li
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
            key={item.id}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ),
};
