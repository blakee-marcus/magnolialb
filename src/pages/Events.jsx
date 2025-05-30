import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CalendarDays, Sparkles, Dice6, Wine, ScrollText, ExternalLink } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.6, ease: 'easeOut' },
  }),
};

const events = [
  {
    title: 'Magic Night',
    icon: <ScrollText className='w-7 h-7 text-brand-secondary' />,
    description:
      'A cozy night of Magic: The Gathering with flavorful snacks, prize cards, and surprise themes.',
  },
  {
    title: 'Gin & Drama',
    icon: <Wine className='w-7 h-7 text-brand-secondary' />,
    description:
      'Signature small-batch gin tastings hosted by our in-house mixologist — exclusive to patrons.',
  },
  {
    title: 'Board Game Socials',
    icon: <Dice6 className='w-7 h-7 text-brand-secondary' />,
    description:
      'Bring your friends or meet new ones — themed board game nights with grazing table access.',
  },
  {
    title: 'Seasonal Pop-Ups',
    icon: <CalendarDays className='w-7 h-7 text-brand-secondary' />,
    description:
      'Rotating events including holiday brunches, tarot nights, and maker markets — open to all.',
  },
];

const patreonLink = 'https://www.patreon.com/theatricaltable';

function Events() {
  return (
    <div className='bg-brand-light text-brand-dark font-body px-6 py-20 space-y-24'>
      <Helmet>
        <title>Events | Theatrical Table</title>
        <meta
          name='description'
          content='Discover whimsical, welcoming events at Theatrical Table — from MTG nights and custom gin tastings to pop-up brunches and board game socials.'
        />
        <meta
          name='keywords'
          content='events, charcuterie, MTG night, gin tasting, board games, Theatrical Table, social gathering, lifestyle events, Long Beach'
        />
        <meta property='og:title' content='Events | Theatrical Table' />
        <meta
          property='og:description'
          content='From cozy game nights to dramatic gin tastings, our events are designed to delight. See what’s happening at Theatrical Table.'
        />
        <meta property='og:image' content='https://theatricaltable.com/og-events.jpg' />
        <meta property='og:url' content='https://theatricaltable.com/events' />
        <link rel='canonical' href='https://theatricaltable.com/events' />
      </Helmet>

      {/* Hero */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeIn}
        className='text-center max-w-3xl mx-auto'>
        <h1 className='text-4xl md:text-5xl font-display font-bold text-brand-primary mb-4'>
          Events Worth Dressing Up For
        </h1>
        <p className='text-lg text-neutral-800'>
          Whether it’s cards, cocktails, or curated chaos — we host playful nights to bring people
          together.
        </p>
        <a
          href={patreonLink}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 mt-6 px-6 py-3 bg-brand-primary text-white rounded-xl font-medium hover:bg-brand-dark transition'>
          See Patron-Only Events <ExternalLink className='w-4 h-4' />
        </a>
      </motion.div>

      {/* Event Grid */}
      <section className='grid gap-8 md:grid-cols-2 max-w-6xl mx-auto'>
        {events.map((event, i) => (
          <motion.div
            key={event.title}
            custom={i}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeIn}
            className='bg-white shadow-card rounded-2xl p-6 flex flex-col'>
            <div className='mb-3'>{event.icon}</div>
            <h2 className='font-display text-xl font-semibold text-brand-primary mb-1'>
              {event.title}
            </h2>
            <p className='text-sm text-neutral-800'>{event.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Final CTA */}
      <div className='text-center mt-12'>
        <p className='text-neutral-800 mb-4'>
          Want early invites and exclusive access? Join the table.
        </p>
        <a
          href={patreonLink}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-xl font-medium hover:bg-brand-dark transition'>
          Become a Patron <Sparkles className='w-4 h-4' />
        </a>
      </div>
    </div>
  );
}

export default Events;
