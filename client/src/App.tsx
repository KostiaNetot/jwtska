import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header';
import Dashboard from './containers/dashboard';
import Main from './containers/main';
import { RootState } from './store';

function App() {
  const isLoggedIn = useSelector((state: RootState) => !!state.auth.authData.accessToken);

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/dashboard' element={isLoggedIn ? <Dashboard/> : <Navigate to='/'/>} />
      </Routes>
    </Router>
  );
}

export default App;
