import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import About from './pages/About';
import Home from './pages/Home';
import Events from './pages/Events';
import Club from './pages/Club';
import Spread from './pages/Spread';
import Services from './pages/Services';
import NotFound from './pages/NotFound';

import NavBar from './components/NavBar';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className='min-h-screen bg-brand-light text-brand-dark font-body'>
          <NavBar />
          <main className='pt-20 px-4 md:px-8 lg:px-16'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/events' element={<Events />} />
              <Route path='/club' element={<Club />} />
              <Route path='/spread' element={<Spread />} />
              <Route path='/services' element={<Services />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
