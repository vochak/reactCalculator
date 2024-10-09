import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('');

  function append(value) {
    if (displayValue === '0' && value === '0') {
      return;
    }
    setDisplayValue((prevValue) => prevValue + value);
  }

  const calculate = () => {
    try {
      // Use a safer expression parser or library here instead of eval()
      const result = eval(displayValue);
      setDisplayValue(isNaN(result) ? 'ERROR' : result.toString());
    } catch (error) {
      setDisplayValue('ERROR');
    }
  }

  function clearDisplay() {
    setDisplayValue('');
  }

  return (
    <>
      <input id="display" readOnly value={displayValue} />
      <div>
        <button id='clear' onClick={clearDisplay}>AC</button>
        <button id='divide' onClick={() => append('/')}>/</button>
        <button id='multiply' onClick={() => append('*')}>x</button>
        <button id='seven' onClick={() => append('7')}>7</button>
        <button id='eight' onClick={() => append('8')}>8</button>
        <button id='nine' onClick={() => append('9')}>9</button><br />
        <button id='four' onClick={() => append('4')}>4</button>
        <button id='five' onClick={() => append('5')}>5</button>
        <button id='six' onClick={() => append('6')}>6</button>
        <button id='one' onClick={() => append('1')}>1</button>
        <button id='two' onClick={() => append('2')}>2</button>
        <button id='three' onClick={() => append('3')}>3</button><br />
        <button id='zero' onClick={() => append('0')}>0</button>
        <button id='subtract' onClick={() => append('-')}>-</button>
        <button id='add' onClick={() => append('+')}>+</button>
        <button id='decimal' onClick={() => append('.')}>.</button>
        <button id='equals' onClick={calculate}>=</button>
      </div>
    </>
  );
}

export default App;
