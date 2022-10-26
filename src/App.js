
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './views/HomePage/HomePage';
import {AboutPage} from './views/AboutPage/AboutPage';
import { ContactsPage } from './views/ContactsPage/ContactsPage';
import {Navigation} from './components/Navigation/Navigation'


function App() {

  return (
    <div className="App">

      <Navigation/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contacts' element={<ContactsPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
