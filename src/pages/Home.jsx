import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  CalendarHeart,
  ShoppingBasket,
  Sparkles,
  CalendarDays,
  Flame,
  ScrollText,
  UtensilsCrossed,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.6, ease: 'easeOut' },
  }),
};

const carouselItems = [
  {
    title: 'Friday Game Night',
    desc: '7 PM. Bites, dice, and delightful company. Dramatis casuals welcome.',
    icon: <CalendarDays className='w-6 h-6 text-brand-charcoalTeal' />,
  },
  {
    title: 'MTG: The Draft Awakens',
    desc: 'Saturday showdown. Bluff boldly. Draft dramatically. Snacks included.',
    icon: <ScrollText className='w-6 h-6 text-brand-charcoalTeal' />,
  },
  {
    title: 'Hot Drop: Summer Zine',
    desc: 'Now live for patrons — flavor theory, rituals, and real ones only.',
    icon: <Flame className='w-6 h-6 text-brand-charcoalTeal' />,
  },
  {
    title: 'Pride Boards Now Booking',
    desc: 'Bright, bold, and balanced. Preorder for your June table now.',
    icon: <UtensilsCrossed className='w-6 h-6 text-brand-charcoalTeal' />,
  },
];

function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <>
      <Helmet>
        <title>Dramatis | Everyday Rituals, Seasonal Spreads, Community Magic</title>
        <meta
          name='description'
          content='Dramatis is your local lifestyle club rooted in ritual, theater, and togetherness. Services, spreads, and events — all designed with care in Long Beach, CA.'
        />
        <link rel='canonical' href='https://dramatis.club/' />
        <meta
          property='og:title'
          content='Dramatis | Everyday Rituals, Seasonal Spreads, Community Magic'
        />
        <meta
          property='og:description'
          content='Curated services and gatherings designed to nourish your life and your table. Join us in Long Beach.'
        />
        <meta
          property='og:image'
          content='https://magnolialb.vercel.app/assets/dramatis-og-image.png'
        />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        <meta property='og:url' content='https://dramatis.club/' />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>

      <div className='bg-neutral-100 text-neutral-900 font-body'>
        <section className='relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden'>
          <div className='absolute inset-0 bg-[url("/assets/hero-hands.jpg")] bg-cover bg-center opacity-20'></div>
          <div className='relative z-10 max-w-3xl'>
            <motion.span
              className='block uppercase text-sm tracking-widest text-brand-mulberry font-semibold mb-3'
              initial='hidden'
              animate='visible'
              variants={fadeInUp}>
              Curated support. Communal magic.
            </motion.span>
            <motion.h1
              className='text-4xl md:text-6xl font-display font-bold text-brand-rosewood mb-6'
              initial='hidden'
              animate='visible'
              variants={fadeInUp}>
              Welcome to Dramatis
            </motion.h1>
            <motion.p
              className='text-lg text-neutral-800 font-body mb-8'
              initial='hidden'
              animate='visible'
              custom={2}
              variants={fadeInUp}>
              A third-space lifestyle brand rooted in seasonal care, gatherings, and the charm of
              something extra. We’re not the main act — we’re the scene change.
            </motion.p>
            <motion.div
              className='flex flex-col sm:flex-row justify-center gap-4'
              initial='hidden'
              animate='visible'
              custom={3}
              variants={fadeInUp}>
              <Link
                to='/services'
                className='inline-block px-6 py-3 rounded-xl bg-brand-rosewood text-white font-medium hover:bg-neutral-900 transition'>
                Explore Services
              </Link>
              <a
                href='https://patreon.com/theatricaltable'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block px-6 py-3 rounded-xl border-2 border-brand-mulberry text-brand-mulberry font-medium hover:bg-brand-mulberry hover:text-white transition'>
                Join the Club
              </a>
            </motion.div>
          </div>
        </section>

        <section className='grid gap-8 px-6 pb-20 md:grid-cols-3 max-w-7xl mx-auto'>
          {[
            {
              title: 'The Spread',
              icon: <ShoppingBasket className='w-8 h-8 text-brand-charcoalTeal' />,
              desc: 'Boards, boxes, and seasonal menus. Made to share, styled to impress.',
              to: '/spread',
            },
            {
              title: 'Events with Heart',
              icon: <CalendarHeart className='w-8 h-8 text-brand-charcoalTeal' />,
              desc: 'From salons to mixers, our gatherings are story-driven and snack-forward.',
              to: '/events',
            },
            {
              title: 'Membership Magic',
              icon: <Sparkles className='w-8 h-8 text-brand-charcoalTeal' />,
              desc: 'Get zines, invites, and priority booking — perks with personality.',
              to: '/club',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className='bg-white shadow-card rounded-2xl p-6 text-center flex flex-col items-center justify-between'
              custom={i + 1}
              initial='hidden'
              animate='visible'
              variants={fadeInUp}>
              <div className='mb-4'>{card.icon}</div>
              <h3 className='font-display text-xl font-semibold mb-2 text-brand-rosewood'>
                {card.title}
              </h3>
              <p className='text-sm text-neutral-800 mb-4'>{card.desc}</p>
              <Link
                to={card.to}
                className='text-brand-charcoalTeal underline underline-offset-4 hover:text-brand-rosewood transition'>
                Learn More →
              </Link>
            </motion.div>
          ))}
        </section>

        <section className='max-w-3xl mx-auto px-6 py-16 text-center'>
          <h2 className='text-3xl font-display font-semibold text-brand-rosewood mb-6'>
            This Week at Dramatis
          </h2>

          <div
            className='relative h-60'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}>
            <AnimatePresence mode='wait'>
              <motion.div
                key={carouselIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className='absolute inset-0 flex flex-col justify-center items-center bg-white shadow-card rounded-2xl px-8 py-6 text-center'>
                <div className='mb-3'>{carouselItems[carouselIndex].icon}</div>
                <h3 className='text-xl font-display font-semibold text-brand-rosewood mb-1'>
                  {carouselItems[carouselIndex].title}
                </h3>
                <p className='text-sm text-neutral-800 max-w-sm'>
                  {carouselItems[carouselIndex].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className='absolute inset-y-0 left-0 flex items-center'>
              <button
                onClick={() =>
                  setCarouselIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
                }
                className='bg-white shadow rounded-full p-2 hover:bg-brand-charcoalTeal/20 transition'
                aria-label='Previous slide'>
                <ChevronLeft className='w-5 h-5 text-brand-rosewood' />
              </button>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center'>
              <button
                onClick={() => setCarouselIndex((prev) => (prev + 1) % carouselItems.length)}
                className='bg-white shadow rounded-full p-2 hover:bg-brand-charcoalTeal/20 transition'
                aria-label='Next slide'>
                <ChevronRight className='w-5 h-5 text-brand-rosewood' />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
