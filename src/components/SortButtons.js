import React from 'react';

function SortButtons({ setSort }) {
  return (
    <div className="sort-buttons">
      <button onClick={() => setSort('date')}>Sort by Date</button>
      <button onClick={() => setSort('alphabetical')}>Sort Alphabetically</button>
    </div>
  );
}

export default SortButtons;