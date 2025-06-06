import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

function NotFound() {
  return (
    <section className='min-h-screen px-6 py-24 bg-neutral-100 text-brand-charcoalTeal flex flex-col items-center justify-center text-center font-body'>
      <div className='max-w-xl'>
        <h1 className='text-[8rem] font-display font-extrabold text-brand-rosewood leading-none mb-4'>
          404
        </h1>
        <p className='text-2xl font-semibold mb-2'>This page missed its cue.</p>
        <p className='text-neutral-700 mb-8'>
          The scene you're looking for either got cut or never made it past the table read.
        </p>
        <Link
          to='/'
          className='inline-flex items-center gap-2 px-6 py-3 bg-brand-rosewood text-white rounded-xl font-medium hover:bg-brand-mulberry transition'>
          Back to the Spotlight <Sparkles className='w-4 h-4' aria-hidden='true' />
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
