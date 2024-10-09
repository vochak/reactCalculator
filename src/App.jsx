import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const display = document.getElementById("display")

function append(value){
  
  if (display.value === '0'  && value === '0'){
    return;
  }

  display.value+=value
}
function calculate(value){
try{

  display.value = eval(display.value)
}catch(error){
  display.value = "ERROR"
}
}
function clearDisplay(){
  display.value = ""
}
  return (
    <>
      <input id="display"  readOnly/>
      <div>
<button id='clear' onClick={clearDisplay}>AC</button>
<button id='divide' onClick={()=> append('/')}>/</button>
<button id='multiply' onClick={()=> append('*')}>x</button>
<button id='seven' onClick={()=> append('7')}>7</button>
<button id='eight' onClick={()=> append('8')}>8</button>
<button id='nine' onClick={()=> append('9')}>9</button><br/>
<button id='four' onClick={()=> append('4')}>4</button>
<button id='five' onClick={()=> append('5')}>5</button>
<button id='six' onClick={()=> append('6')}>6</button>
<button id='one' onClick={()=> append('1')}>1</button>
<button id='two' onClick={()=> append('2')}>2</button>
<button id='three' onClick={()=> append('3')}>3</button><br/>
<button id='zero' onClick={()=> append('0')}>0</button>
<button id='subtract' onClick={()=> append('-')}>-</button>
<button id='add' onClick={()=> append('+')}>+</button>
<button id='decimal' onClick={()=> append('.')}>.</button>
<button id='equals' onClick={calculate}>=</button>



      </div>
    </>
  )
}

export default App
