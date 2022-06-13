import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Discover from './pages/discover'
import Home from './pages/home'
import Details from './pages/details'
import NavBar from './components/navBar'
import { useLocation } from 'react-router-dom'

import './App.css'

function App() {
  return (
      <div className={useLocation().pathname ==='/' ? 'App-bg-transparent' : 'App-bg-color'}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/discover/:movies' element={<Discover />} />
          <Route path='/search/:search_text' element={<Discover />} />
          <Route path='/details/:movie_name' element={<Details />} />
        </Routes>
      </div>
  );
}

export default App;
