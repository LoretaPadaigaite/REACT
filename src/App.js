
import { Route, Routes } from 'react-router-dom';
import './App.css';
//import { HomePage } from './views/HomePage/HomePage';
//import {AboutPage} from './views/AboutPage/AboutPage';
//import { ContactsPage } from './views/ContactsPage/ContactsPage';
import {Navigation} from './components/Navigation/Navigation'
import {PageLayout} from './components/PageLayout/PageLayout';
//import { LoginPage } from './views/LoginPage/LoginPage';
//import { useState } from 'react';
import React, { useState } from 'react';


const HomePage = React.lazy(() => import('./views/HomePage/HomePage'));
const ContactsPage = React.lazy(() => import('./views/ContactsPage/ContactsPage'));
const AboutPage = React.lazy(() => import ('./views/AboutPage/AboutPage'))
const LoginPage = React.lazy(() => import('./views/LoginPage/LoginPage'))

function App() {

  const {user, setUser} = useState(null);

  const handleLogin = (username) => setUser ({username});


  return (
    <div className="App">

<Navigation/>

      <Routes>

        <Route path='/' element={<PageLayout user={user}/>}>
          <Route index element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <HomePage/>
            </React.Suspense>
          } />

          <Route path="/contacts"  element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <ContactsPage />
            </React.Suspense>
          } />

          <Route path="/about"  element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <AboutPage />
            </React.Suspense>
          } />
        </Route>

          <Route path="/login"  element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <LoginPage onLogin={handleLogin}/>
            </React.Suspense>
          } />


      </Routes>
    </div>
  );
}

export default App;
