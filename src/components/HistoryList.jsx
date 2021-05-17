import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = ({ history }) => (
  <ul aria-label='history'>
    {history.map((historyItem) => 
      <li key={`${historyItem.method}+${historyItem.method}`}>
        <HistoryItem 
        method={historyItem.method}
        url={historyItem.url}
        />
      </li>
    )}
  </ul>
)

HistoryList.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      method: PropTypes.string.isRequired,
      url: PropTypes.string.
    })
  ),
}