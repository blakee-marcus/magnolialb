import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const logoVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: [1, 1.1, 1],
    transition: {
      duration: 1.8,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 4,
    },
  },
};

const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.35, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/club', label: 'Club' },
    { path: '/spread', label: 'The Spread' },
    { path: '/events', label: 'Events' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
  ];

  return (
    <motion.header
      variants={navVariants}
      initial='hidden'
      animate='visible'
      className='fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-aqua shadow-md'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8'>
        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-2 font-heading text-xl md:text-2xl tracking-tight text-brand-rosewood'>
          <motion.span variants={logoVariants} initial='initial' animate='animate'>
            <Sparkles className='w-6 h-6 text-brand-mulberry' />
          </motion.span>
          <span className='italic font-quote'>Dramatis</span>
        </Link>

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center gap-6 text-sm font-heading tracking-wide text-brand-charcoalTeal'>
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? 'text-brand-mulberry underline underline-offset-4'
                  : 'hover:text-brand-mulberry transition-colors duration-200'
              }>
              {label}
            </NavLink>
          ))}
          <a
            href='https://www.patreon.com/dramatis?subscribed=true'
            target='_blank'
            rel='noopener noreferrer'
            className='ml-4 inline-block px-4 py-2 text-sm rounded-full font-heading bg-brand-mulberry text-white hover:bg-brand-rosewood transition'>
            Join the Club →
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className='md:hidden p-2 rounded-md text-brand-charcoalTeal focus:outline-none'>
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={menuVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='md:hidden flex flex-col gap-4 px-4 pb-4 pt-2 text-sm font-heading text-brand-charcoalTeal bg-white border-t border-brand-aqua shadow'>
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'text-brand-mulberry underline underline-offset-4'
                    : 'hover:text-brand-mulberry transition-colors duration-200'
                }>
                {label}
              </NavLink>
            ))}
            <a
              href='https://www.patreon.com/dramatis?subscribed=true'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-2 inline-block px-4 py-2 text-center rounded-full font-heading bg-brand-mulberry text-white hover:bg-brand-rosewood transition'>
              Join the Club →
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default NavBar;
