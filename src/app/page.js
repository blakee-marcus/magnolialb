'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
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
    icon: <CalendarDays className='w-6 h-6 text-charcoalTeal' />,
  },
  {
    title: 'MTG: The Draft Awakens',
    desc: 'Saturday showdown. Bluff boldly. Draft dramatically. Snacks included.',
    icon: <ScrollText className='w-6 h-6 text-charcoalTeal' />,
  },
  {
    title: 'Hot Drop: Summer Zine',
    desc: 'Now live for patrons — flavor theory, rituals, and real ones only.',
    icon: <Flame className='w-6 h-6 text-charcoalTeal' />,
  },
  {
    title: 'Pride Boards Now Booking',
    desc: 'Bright, bold, and balanced. Preorder for your June table now.',
    icon: <UtensilsCrossed className='w-6 h-6 text-charcoalTeal' />,
  },
];

export default function Home() {
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
    <div className='text-neutral-900 font-body'>
      <Head>
        <title>Dramatis | Events, Boards & Lifestyle Services in Long Beach</title>
        <meta
          name='description'
          content='Dramatis is a Long Beach-based lifestyle brand offering immersive events, styled food spreads, curated memberships, and personalized services. A third space for charm, calm, and connection.'
        />
        <meta
          name='keywords'
          content='Dramatis, Long Beach events, charcuterie boards, creative gatherings, lifestyle services, zines, rituals, third space, curated experiences'
        />
        <link rel='canonical' href='https://magnolialb.vercel.app/' />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Dramatis | A Third Space for Boards & Belonging' />
        <meta
          property='og:description'
          content='Explore Dramatis: immersive events, styled spreads, rituals, and personalized lifestyle services based in Long Beach. Memberships available.'
        />
        <meta
          property='og:image'
          content='https://magnolialb.vercel.app/images/dramatis-og-image.png'
        />
        <meta property='og:url' content='https://magnolialb.vercel.app/' />
        <meta property='og:site_name' content='Dramatis' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Dramatis | Boards, Belonging & Beautiful Chaos' />
        <meta
          name='twitter:description'
          content='Zines, game nights, styled boards, and lifestyle support — all part of the Dramatis universe. Handmade moments await.'
        />
        <meta
          name='twitter:image'
          content='https://magnolialb.vercel.app/images/dramatis-og-image.png'
        />

        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Dramatis',
              url: 'https://magnolialb.vercel.app',
              logo: 'https://magnolialb.vercel.app/images/dramatis-og-image.png',
              description:
                'Dramatis is a lifestyle brand rooted in connection, curated events, seasonal food experiences, and creative rituals. Based in Long Beach, CA.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Long Beach',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
              sameAs: [
                'https://instagram.com/theatricaltable',
                'https://patreon.com/theatricaltable',
              ],
            }),
          }}
        />
      </Head>
      {/* Hero */}
      <section className='relative isolate px-6 py-24 sm:py-32'>
        <div className='absolute inset-0 -z-10 bg-gradient-to-b from-buttercream via-white to-mist opacity-60'></div>
        <div className='max-w-3xl mx-auto text-center'>
          <motion.div
            className='bg-white/80 backdrop-blur-sm shadow-card rounded-2xl px-6 py-10 sm:px-10 sm:py-14'
            initial='hidden'
            animate='visible'
            variants={fadeInUp}>
            <motion.h2
              className='text-3xl md:text-5xl font-display font-bold text-rosewood mb-6 leading-snug'
              variants={fadeInUp}>
              Dramatis{' '}
              <span className='block text-base italic font-normal text-mulberry'>
                (from the Latin <span className='italic'>dramatis personae</span>)
              </span>
            </motion.h2>

            <motion.p className='text-lg text-neutral-900 mb-4' custom={2} variants={fadeInUp}>
              Means “the characters in a play.” It’s a reminder that life is a story, and each of us
              has a role to play.
            </motion.p>

            <motion.p
              className='text-lg font-medium text-charcoalTeal mb-6'
              custom={3}
              variants={fadeInUp}>
              This is your life — let’s make it unforgettable.
            </motion.p>

            <motion.p
              className='text-base text-neutral-700 mb-8 max-w-prose mx-auto'
              custom={4}
              variants={fadeInUp}>
              We are a third-space lifestyle brand rooted in seasonal care, gatherings, and the
              charm of something extra.
            </motion.p>

            <motion.div
              className='text-left space-y-6 text-sm sm:text-base max-w-prose mx-auto border-t border-neutral-200 pt-6'
              custom={5}
              variants={fadeInUp}>
              <div>
                <p className='font-semibold text-mulberry mb-2'>Offerings</p>
                <ul className='list-disc list-inside text-neutral-800 space-y-1'>
                  <li>Unique events that bring people together with heart, ease, and intention</li>
                  <li>Elevated food spreads and handcrafted snacks made fresh</li>
                  <li>A monthly zine and membership club for those who want a deeper connection</li>
                  <li>
                    Personalized services to support your life (from home care to admin to pet
                    sitting)
                  </li>
                </ul>
              </div>
              <div>
                <p className='font-semibold text-mulberry mb-2'>Why</p>
                <p>
                  I’m William Rex Horner and I started Dramatis because I believe in handmade
                  moments, in chosen family, and in showing up with snacks.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className='grid gap-8 px-6 pb-20 md:grid-cols-3 max-w-7xl mx-auto'>
        {[
          {
            title: 'The Spread',
            icon: <ShoppingBasket className='w-8 h-8 text-charcoalTeal' />,
            desc: 'Boards, boxes, and seasonal menus. Made to share, styled to impress.',
            to: '/spread',
          },
          {
            title: 'Events with Heart',
            icon: <CalendarHeart className='w-8 h-8 text-charcoalTeal' />,
            desc: 'From salons to mixers, our gatherings are story-driven and snack-forward.',
            to: '/events',
          },
          {
            title: 'Membership Magic',
            icon: <Sparkles className='w-8 h-8 text-charcoalTeal' />,
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
            <h3 className='font-display text-xl font-semibold mb-2 text-rosewood'>{card.title}</h3>
            <p className='text-sm text-neutral-800 mb-4'>{card.desc}</p>
            <Link
              href={card.to}
              className='text-charcoalTeal underline underline-offset-4 hover:text-rosewood transition'>
              Learn More →
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Carousel */}
      <section className='max-w-3xl mx-auto px-6 py-16 text-center'>
        <h2 className='text-3xl font-display font-semibold text-rosewood mb-6'>
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
              <h3 className='text-xl font-display font-semibold text-rosewood mb-1'>
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
              className='bg-white shadow rounded-full p-2 hover:bg-charcoalTeal/20 transition'
              aria-label='Previous slide'>
              <ChevronLeft className='w-5 h-5 text-rosewood' />
            </button>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center'>
            <button
              onClick={() => setCarouselIndex((prev) => (prev + 1) % carouselItems.length)}
              className='bg-white shadow rounded-full p-2 hover:bg-charcoalTeal/20 transition'
              aria-label='Next slide'>
              <ChevronRight className='w-5 h-5 text-rosewood' />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
