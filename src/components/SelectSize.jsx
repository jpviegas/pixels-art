import React from 'react';
import { Link } from 'react-router-dom';

const SelectSize = () => {
  return (
    <div className="select">
      <h2>Select table's size</h2>

      <ul>
        <li>
          <Link to="/table3">3 x 3</Link>
        </li>
        <li>
          <Link to="/table5">5 x 5</Link>
        </li>
        <li>
          <Link to="/table9">9 x 9</Link>
        </li>
      </ul>
    </div>
  );
};

export default SelectSize;
