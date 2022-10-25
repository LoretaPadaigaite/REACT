
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    console.log('COMPONENT Mounted')
  }, [count]);

  const handleIncrement = (event) => {
    console.log(event)
    setCount(count + 1)
  }
  const handleIncrementKeyDown = (event) => {
    console.log('KEY DOWN')
    console.log(event)
  }
  const handleIncrementKeyUp = (event) => {
    console.log('KEY UP')
    console.log(event)
  }

  const handleInputChange = (event) => {
    console.log('INPUT Value CHANGE')
    console.log(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('SUBMIT')
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
      {count}
      <button 
        onKeyUp={handleIncrementKeyUp} 
        onKeyDown={handleIncrementKeyDown} 
        onClick={handleIncrement}
      >
        Increment
      </button>

      <input onChange={handleInputChange} />

</form>
  
    </div>
  );
}

export default App;
