import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

function ThankYouModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}>
          <motion.div
            className='bg-white rounded-2xl shadow-dramatic max-w-md mx-auto p-8 text-center relative z-10'
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}>
            <div className='mb-4 flex justify-center'>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: [1, 1.15, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 3 }}>
                <Sparkles className='w-10 h-10 text-brand-secondary' />
              </motion.span>
            </div>
            <h2 className='text-2xl font-display font-bold text-brand-primary mb-2'>
              Thank You for Joining!
            </h2>
            <p className='text-neutral-800 mb-4'>
              You’re officially a patron of <span className='font-semibold'>Theatrical Table</span>.
              We can’t wait to share the next act with you — it’s going to be delicious.
            </p>
            <button
              onClick={onClose}
              className='mt-4 px-5 py-2 bg-brand-primary text-white rounded-xl font-medium hover:bg-brand-dark transition'>
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ThankYouModal;
