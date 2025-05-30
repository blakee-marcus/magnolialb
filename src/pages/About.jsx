import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Coffee, HandHeart, Gamepad2, Sun, Users } from 'lucide-react';

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
    icon: <Users className='w-7 h-7 text-brand-secondary' />,
    description:
      'Not home, not work — just a cozy, creative in-between. We’re crafting a space where you can snack, sip, laugh, and feel like you belong.',
  },
  {
    title: 'Fueled by Coffee & Curiosity',
    icon: <Coffee className='w-7 h-7 text-brand-secondary' />,
    description:
      'We believe every great idea (and every epic game move) starts with a good cup of coffee. Ritual meets energy in every offering.',
  },
  {
    title: 'Play is Sacred',
    icon: <Gamepad2 className='w-7 h-7 text-brand-secondary' />,
    description:
      'From MTG to board game socials, we design events that foster joy, imagination, and community. There’s always room at the table.',
  },
  {
    title: 'Guided by the Light',
    icon: <Sun className='w-7 h-7 text-brand-secondary' />,
    description:
      'We’re here to uplift — through warmth, transparency, inclusion, and a little bit of sparkle. Hope and harmony are baked into everything we do.',
  },
];

function About() {
  return (
    <div className='bg-brand-light text-brand-dark font-body px-6 py-20 space-y-24'>
      <Helmet>
        <title>About Us | Theatrical Table – A Third Space for Boards & Belonging</title>
        <meta
          name='description'
          content='Learn the story behind Theatrical Table — a cozy third space blending grazing boards, coffee, and game nights with theatrical flair and community warmth.'
        />
        <link rel='canonical' href='https://theatricaltable.com/about' />
        <meta property='og:title' content='About Theatrical Table' />
        <meta
          property='og:description'
          content='Theatrical Table is more than a food brand — it’s a space for connection, creativity, and joy. Discover our values and origin.'
        />
        <meta property='og:image' content='/assets/theatrical-og-image.jpg' />
        <meta property='og:url' content='https://theatricaltable.com/about' />
        <meta name='twitter:card' content='summary_large_image' />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Theatrical Table',
            url: 'https://theatricaltable.com/about',
            logo: 'https://theatricaltable.com/assets/theatrical-og-image.jpg',
            description:
              'Theatrical Table is a third-space lifestyle brand built on a love of charcuterie, coffee, community, and connection through game nights and immersive events.',
            sameAs: [
              'https://instagram.com/theatricaltable',
              'https://patreon.com/theatricaltable',
            ],
            location: {
              '@type': 'Place',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Long Beach',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
            },
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeIn}
        className='text-center max-w-3xl mx-auto'>
        <h1 className='text-4xl md:text-5xl font-display font-bold text-brand-primary mb-4'>
          Our Story
        </h1>
        <p className='text-lg text-neutral-800'>
          Theatrical Table was born from a love of food, games, coffee, and connection. Part
          charcuterie studio, part event space, part community hideaway — we’re building a third
          space that feels like coming home to something new.
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
            className='bg-white shadow-card rounded-2xl p-6 text-center'>
            <div className='mb-3 flex justify-center'>{value.icon}</div>
            <h2 className='font-display text-xl font-semibold text-brand-primary mb-2'>
              {value.title}
            </h2>
            <p className='text-sm text-neutral-800'>{value.description}</p>
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
        <h2 className='text-3xl font-display text-brand-primary mb-4'>Come Sit With Us</h2>
        <p className='text-neutral-800 max-w-2xl mx-auto mb-8'>
          Whether you’re here for a custom grazing board, a game night, or a good conversation over
          coffee — you’re welcome here. We’re honored to be part of your story, and we can’t wait to
          share ours with you.
        </p>
        <Sparkles className='w-8 h-8 text-brand-secondary mx-auto animate-sparkle' />
      </motion.div>
    </div>
  );
}

export default About;
