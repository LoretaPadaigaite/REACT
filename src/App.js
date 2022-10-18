
import { Counter } from './Counter/Counter';
import './App.css';
import { useState } from 'react';

function App() {
  
const [isCounterVisible, setIsCounterVisible] = useState(true);
const handelToggleCounter = () => {
  setIsCounterVisible(!isCounterVisible);
}

  return (
    <div className="App">


    <button onClick={handelToggleCounter}>Toggle Counter</button>

     {isCounterVisible &&  <Counter/>}
  
    </div>
  );
}

export default App;
