import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Boards from './pages/Boards';
import Events from './pages/Events';
import Subscribe from './pages/Subscribe';
import About from './pages/About';
import NotFound from './pages/NotFound';

import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-brand-light text-brand-dark font-body'>
        <NavBar />
        <main className='pt-20 px-4 md:px-8 lg:px-16'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/boards' element={<Boards />} />
            <Route path='/events' element={<Events />} />
            <Route path='/subscribe' element={<Subscribe />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
