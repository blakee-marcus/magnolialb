'use client';

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ThankYouPage() {
  return (
    <div className='min-h-screen px-6 py-24 max-w-3xl mx-auto text-center font-body text-neutral-900'>
      <Head>
        <title>Thank You | Dramatis Membership</title>
        <meta
          name='description'
          content='Thanks for subscribing to Dramatis. Your membership unlocks zines, perks, events, and handmade moments ahead.'
        />
        <link rel='canonical' href='https://www.dramatis.us/thankyou' />
        <meta property='og:title' content='Thank You | Dramatis' />
        <meta
          property='og:description'
          content='Welcome to the inner circle. Your Dramatis membership is now active — magic awaits.'
        />
        <meta
          property='og:image'
          content='https://www.dramatis.us/images/dramatis-og-image.png'
        />
        <meta property='og:url' content='https://www.dramatis.us/thankyou' />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <motion.div
        className='bg-white rounded-2xl shadow-card px-8 py-14'
        initial='hidden'
        animate='visible'
        variants={fadeInUp}>
        <Sparkles className='w-8 h-8 text-mulberry mb-4 mx-auto animate-pulse' />
        <h1 className='text-3xl font-display font-bold text-rosewood mb-4'>
          Thank You for Joining!
        </h1>
        <p className='text-neutral-800 mb-6'>
          You're officially part of the Dramatis crew. A welcome email is on its way, and your perks
          are just beginning.
        </p>
        <p className='text-sm text-neutral-700 mb-8'>
          If you don’t see your confirmation, check your spam or promotions folder. Still need help?
          Email{' '}
          <a href='mailto:hello@dramatis.com' className='underline'>
            hello@dramatis.com
          </a>
          .
        </p>
        <Link
          href='/'
          className='inline-block px-6 py-3 rounded-xl bg-rosewood text-white font-medium hover:bg-neutral-900 transition'>
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
