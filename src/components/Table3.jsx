import React, { useState } from 'react';
import '../style.css';

const Table3 = () => {
  const [color, setColor] = useState('white');
  const n = [1, 2, 3];

  function clear() {
    const black = document.querySelectorAll('td.black');
    for (i = 0; i < black.length; i++) {
      black[i].classList.replace('black', 'white');
    }
    const red = document.querySelectorAll('td.red');
    for (i = 0; i < red.length; i++) {
      red[i].classList.replace('red', 'white');
    }
    const green = document.querySelectorAll('td.green');
    for (i = 0; i < green.length; i++) {
      green[i].classList.replace('green', 'white');
    }
    const blue = document.querySelectorAll('td.blue');
    for (i = 0; i < blue.length; i++) {
      blue[i].classList.replace('blue', 'white');
    }
  }
  return (
    <>
      <h2>Color palette</h2>

      <div className="color-palette">
        <div className="black" onClick={() => setColor('black')}></div>
        <div className="red" onClick={() => setColor('red')}></div>
        <div className="green" onClick={() => setColor('green')}></div>
        <div className="blue" onClick={() => setColor('blue')}></div>
      </div>

      <h2>Selected color:</h2>
      <p className={color}></p>
      <button className="clear" onClick={() => clear()}>
        Clear table
      </button>

      <table>
        <tbody>
          {n.map((x, index) => (
            <tr key={index}>
              {n.map((y, index) => (
                <td
                  key={index}
                  className="white"
                  onClick={e => (e.target.className = color)}
                  onDoubleClick={e => (e.target.className = 'white')}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table3;
