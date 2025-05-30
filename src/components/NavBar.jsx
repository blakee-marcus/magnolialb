import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const navVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const logoVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: [1, 1.15, 1],
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 3,
    },
  },
};

function NavBar() {
  return (
    <motion.header
      variants={navVariants}
      initial='hidden'
      animate='visible'
      className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-brand-secondary shadow-md'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8'>
        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-2 text-brand-primary font-display text-2xl font-bold tracking-tight'>
          <motion.span variants={logoVariants} initial='initial' animate='animate'>
            <Sparkles className='w-6 h-6 text-brand-secondary' />
          </motion.span>
          Theatrical Table
        </Link>

        {/* Nav Links */}
        <nav className='hidden md:flex gap-6 text-sm font-semibold text-brand-primary'>
          {['boards', 'events', 'subscribe', 'about'].map((path) => (
            <NavLink
              key={path}
              to={`/${path}`}
              className={({ isActive }) =>
                isActive
                  ? 'text-brand-secondary underline underline-offset-4'
                  : 'hover:text-brand-secondary transition'
              }>
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </NavLink>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

export default NavBar;
