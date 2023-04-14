import React from 'react';
import PropTypes from 'prop-types';

import data from '../../transactions.json';
import { Table, Tbody, Thead, TRow } from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  const { id, type, amount, currency } = items;
  return (
    <Table>
      <Thead>
        <TRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TRow>
      </Thead>
      <Tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TRow key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TRow>
        ))}
      </Tbody>
    </Table>
  );
}

// Прописую типи пропсів

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
