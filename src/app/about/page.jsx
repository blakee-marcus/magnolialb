'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import { Sparkles, Coffee, Gamepad2, Sun, Users } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.6, ease: 'easeOut' },
  }),
};

const values = [
  {
    title: 'A Third Space for All',
    icon: <Users className='w-7 h-7 text-neutral' aria-hidden='true' />,
    description:
      'Not quite home and not quite work. Dramatis is the cozy middle ground where strangers become regulars and there’s always room to pull up another chair.',
  },
  {
    title: 'Brewed with Intention',
    icon: <Coffee className='w-7 h-7 text-neutral' aria-hidden='true' />,
    description:
      'Every cup is personal. Whether you’re sipping herbal tea or a double shot, each pour is about presence, comfort, and connection.',
  },
  {
    title: 'Play is Sacred',
    icon: <Gamepad2 className='w-7 h-7 text-neutral' aria-hidden='true' />,
    description:
      'Games are how we connect. From thoughtful strategy to joyful chaos, play invites us to show up, take a breath, and share the moment.',
  },
  {
    title: 'Drawn to the Light',
    icon: <Sun className='w-7 h-7 text-neutral' aria-hidden='true' />,
    description:
      'This space is built on creativity, care, and curiosity. Even when things are uncertain, Dramatis leans toward hope and the warmth of being together.',
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Dramatis | Third Space for Boards, Coffee & Community in Long Beach</title>
        <meta
          name='description'
          content='Dramatis is a cozy third space in Long Beach blending grazing boards, artisan coffee, and tabletop games. Discover our story, values, and vision for community connection.'
        />
        <meta
          name='keywords'
          content='Dramatis, third space, Long Beach coffee shop, charcuterie, game nights, community events, grazing boards, creative spaces'
        />
        <link rel='canonical' href='https://www.dramatis.us/about' />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='About Dramatis | Boards, Coffee & Community in Long Beach'
        />
        <meta
          property='og:description'
          content='Learn how Dramatis became Long Beach’s warm and welcoming third space for grazing boards, coffee, games, and community.'
        />
        <meta
          property='og:image'
          content='https://www.dramatis.us/images/dramatis-og-image.png'
        />
        <meta property='og:url' content='https://www.dramatis.us/about' />
        <meta property='og:site_name' content='Dramatis' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='About Dramatis | Boards, Coffee & Community in Long Beach'
        />
        <meta
          name='twitter:description'
          content='Discover the story behind Dramatis — where food, games, and connection meet.'
        />
        <meta
          name='twitter:image'
          content='https://www.dramatis.us/assets/dramatis-og-image.png'
        />

        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CafeOrCoffeeShop',
              name: 'Dramatis',
              url: 'https://www.dramatis.us',
              logo: 'https://www.dramatis.us/assets/dramatis-og-image.png',
              image: 'https://www.dramatis.us/assets/dramatis-og-image.png',
              description:
                'Dramatis is a third-space lifestyle concept in Long Beach offering grazing boards, coffee, games, and immersive events.',
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

      <div className='text-neutral-900 font-body px-6 py-20 space-y-24'>
        {/* Hero */}
        <motion.div
          initial='hidden'
          animate='visible'
          variants={fadeIn}
          className='text-center max-w-3xl mx-auto'>
          <h1 className='text-4xl md:text-5xl font-display font-bold text-rosewood mb-4'>
            Our Story
          </h1>
          <p className='text-lg text-neutral-800'>
            Welcome to Dramatis. This is a lovingly built third space where food, games, and ritual
            come together. Run by one person with a passion for hosting and storytelling, Dramatis
            invites you to gather, slow down, and enjoy something a little different.
          </p>
        </motion.div>

        {/* Core Values */}
        <section className='grid gap-8 md:grid-cols-2 max-w-6xl mx-auto'>
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              custom={i}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeIn}
              className='bg-buttercream shadow-card rounded-2xl px-6 py-8 text-center'>
              <div className='mb-3 flex justify-center'>{value.icon}</div>
              <h2 className='font-display text-xl font-semibold text-rosewood mb-2'>
                {value.title}
              </h2>
              <p className='text-sm text-neutral-900'>{value.description}</p>
            </motion.div>
          ))}
        </section>

        {/* Closing */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeIn}
          className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-display text-rosewood mb-4'>Take a Seat</h2>
          <p className='text-neutral-800 max-w-2xl mx-auto mb-8'>
            Whether you're here for a bite, a board, or a little bit of magic, your seat is already
            waiting. This space is handmade with care and built on the belief that small gatherings
            can hold big meaning.
          </p>

          <Sparkles
            className='w-8 h-8 text-buttercream mx-auto animate-sparkle'
            aria-hidden='true'
          />
        </motion.div>
      </div>
    </>
  );
}
