import React from 'react';
import PropTypes from 'prop-types';
import styles from './transaction.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table style={{ backgroundColor: 'white', width: '330px' }}>
      <thead>
        <tr style={{ backgroundColor: 'lightblue', height: '30px' }}>
          <th className="th-item">Type</th>
          <th className="th-item">Amount</th>
          <th className="th-item">Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr
            style={{
              color: 'darkgrey',
              fontSize: '14px',
              textAlign: 'center',
              height: '30px',
            }}
            key={item.id}
          >
            <td className={styles.td}>{item.type}</td>
            <td className={styles.td}>{item.amount}</td>
            <td className={styles.td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
