
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './views/HomePage/HomePage';
import {AboutPage} from './views/AboutPage/AboutPage';
import { ContactsPage } from './views/ContactsPage/ContactsPage';
import {Navigation} from './components/Navigation/Navigation'
import {PageLayout} from './components/PageLayout/PageLayout';
import { LoginPage } from './views/LoginPage/LoginPage';
import { useState } from 'react';


function App() {

  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ username: 'Petras123' });
  const handleLogout = () => setUser(null);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout user={user} onLogout={handleLogout} />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        {/* Login route */}
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
