import logo from './logo.svg';
import { Test } from './Test/test';
import { Button } from './Button/Button';
import { Header } from './Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">

      <Header/>

      < Test/>

      < Button className='button' text='i am first button'/>
      < Button>Click my <span>123</span></Button>
      < Button text='Press'/>


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
