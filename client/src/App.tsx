import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './containers/dashboard';
import Main from './containers/main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
