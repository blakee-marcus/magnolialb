import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
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
    icon: <Users className='w-7 h-7 text-brand-buttercream' />,
    description:
      'More than a venue — this is your community intermission. A cozy in-between where laughter lingers, ideas steep like tea, and the table is always set for one more.',
  },
  {
    title: 'Brewed with Intention',
    icon: <Coffee className='w-7 h-7 text-brand-buttercream' />,
    description:
      'We serve ritual by the cup. Each pour fuels connection, each sip sparks curiosity. Whether espresso or herbal, your mug means more here.',
  },
  {
    title: 'Play is Sacred',
    icon: <Gamepad2 className='w-7 h-7 text-brand-buttercream' />,
    description:
      'Strategy, silliness, storytelling — we host it all. From tabletop tales to spontaneous joy, gameplay is our heartbeat and every guest is a main character.',
  },
  {
    title: 'Drawn to the Light',
    icon: <Sun className='w-7 h-7 text-brand-buttercream' />,
    description:
      'We orbit around optimism. Built on care and creativity, Dramatis channels the warm glow of belonging and believes in brighter tomorrows.',
  },
];

function About() {
  return (
    <div className='bg-brand-light text-brand-dark font-body px-6 py-20 space-y-24'>
      <Helmet>
        <title>About Us | Dramatis – A Third Space for Boards & Belonging</title>
        <meta
          name='description'
          content='Learn the story behind Dramatis — a cozy third space blending grazing boards, coffee, and game nights with theatrical flair and community warmth.'
        />
        <link rel='canonical' href='https://theatricaltable.com/about' />
        <meta property='og:title' content='About Dramatis' />
        <meta
          property='og:description'
          content='Dramatis is more than a food brand — it’s a space for connection, creativity, and joy. Discover our values and origin.'
        />
        <meta property='og:image' content='/assets/theatrical-og-image.jpg' />
        <meta property='og:url' content='https://theatricaltable.com/about' />
        <meta name='twitter:card' content='summary_large_image' />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Dramatis',
            url: 'https://theatricaltable.com/about',
            logo: 'https://theatricaltable.com/assets/theatrical-og-image.jpg',
            description:
              'Dramatis is a third-space lifestyle brand built on a love of charcuterie, coffee, community, and connection through game nights and immersive events.',
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
        <h1 className='text-4xl md:text-5xl font-display font-bold text-brand-rosewood mb-4'>
          Our Story
        </h1>
        <p className='text-lg text-neutral-800'>
          Welcome to Dramatis — where every graze, pour, and play invites you into a world of
          flavor, imagination, and belonging. We’re not just hosting guests. We’re hosting scenes.
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
            <h2 className='font-display text-xl font-semibold text-brand-rosewood mb-2'>
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
        <h2 className='text-3xl font-display text-brand-rosewood mb-4'>Take a Seat</h2>
        <p className='text-neutral-800 max-w-2xl mx-auto mb-8'>
          Whether you’re sipping, snacking, or storytelling — your place at the table is already
          set. Let’s gather around something beautiful.
        </p>
        <Sparkles className='w-8 h-8 text-brand-buttercream mx-auto animate-sparkle' />
      </motion.div>
    </div>
  );
}

export default About;
