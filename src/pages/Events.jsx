import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Sparkles, ExternalLink } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.6, ease: 'easeOut' },
  }),
};

const patreonLink = 'https://www.patreon.com/theatricaltable';

const pastEvents = [
  'RPDR Viewing Salon – “Sequins, screens, and social tea”',
  'Drag & Decadence – “More looks. Less lighting.”',
  'Street Fighter VI Tournament – “Combat meets canapé”',
  'Living Room Theatre: Ghost Stories – “Performance with a pour”',
  'Second Chances & Citrus Punch – “Grown-Up Mixer · Curated Crowd”',
];

const upcomingIdeas = [
  'Grazing + Gagging – “Sip, snack, scream — in style”',
  'Magic for Mortals – “MTG for beginners who like snacks and vibes”',
  'Craft & Charcuterie – “Hands-on, hearts open”',
  'Paper-Making & Pâté – “Ritual, recycled”',
  'Salon Night: First Reads – “Where scripts get sipped”',
  'Coven Club – “Witchy wear, wine, and whispering”',
  'Threads of Change – “Stitch, snack, and talk systems.”',
];

function Events() {
  return (
    <div className='bg-neutral-100 text-neutral-900 font-body px-6 py-20 space-y-24'>
      <Helmet>
        <title>Events | Dramatis</title>
        <meta
          name='description'
          content='From gin nights to script readings, Dramatis events are intimate, taste-forward gatherings designed to delight. Members only. Magic guaranteed.'
        />
        <meta
          name='keywords'
          content='Dramatis events, curated gatherings, salon nights, creative community, immersive experiences, Long Beach, gin tastings, board nights'
        />
        <meta property='og:title' content='Events | Dramatis' />
        <meta
          property='og:description'
          content='Join the Dramatis Club and access immersive events crafted for creative connection. Part speakeasy, part story circle, always delicious.'
        />
        <meta
          property='og:image'
          content='https://magnolialb.vercel.app/assets/dramatis-og-image.png'
        />
        <meta property='og:url' content='https://theatricaltable.com/events' />
        <link rel='canonical' href='https://theatricaltable.com/events' />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>

      {/* Hero Section */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeIn}
        className='text-center max-w-3xl mx-auto'>
        <h1 className='text-4xl md:text-5xl font-display font-bold text-brand-rosewood mb-4'>
          Come for the Charcuterie. Stay for the Scene.
        </h1>
        <p className='text-lg text-neutral-800 mb-4'>
          We host gatherings with taste. Think board game salons, kitchen witch covens, cocktail
          theatrics — the kind of nights you dream about but never knew how to find.
        </p>
        <a
          href={patreonLink}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 px-6 py-3 bg-brand-rosewood text-white rounded-xl font-medium hover:bg-neutral-900 transition'>
          Join the Club <ExternalLink className='w-4 h-4' aria-hidden='true' />
        </a>
      </motion.div>

      {/* What’s Included Section */}
      <section className='max-w-4xl mx-auto text-center space-y-6'>
        <h2 className='text-2xl font-display text-brand-rosewood font-semibold'>What to Expect</h2>
        <ul className='text-neutral-800 space-y-2'>
          <li>✨ Private, password-protected invites</li>
          <li>✨ Styled spreads and signature drinks</li>
          <li>✨ Lo-fi games, icebreakers, or shared rituals</li>
          <li>✨ Themed offerings (think tarot, tea, or table reads)</li>
          <li>✨ A takeaway touch — always charming, never cheesy</li>
          <li>✨ Alcohol included, not upsold (we’re not that brand)</li>
        </ul>
      </section>

      {/* How It Works */}
      <section className='max-w-4xl mx-auto text-center space-y-4'>
        <h2 className='text-2xl font-display text-brand-rosewood font-semibold'>
          How the Curtain Rises
        </h2>
        <p className='text-neutral-800'>✨ Membership unlocks the magic.</p>
        <ul className='text-neutral-700 space-y-1'>
          <li>1. Become a Patron — Join the Dramatis Club on Patreon</li>
          <li>2. Get the Invite — We’ll post the RSVP in your feed</li>
          <li>3. Claim Your Seat — Events are ticketed but intimate</li>
          <li>4. Show Up — In style, in spirit, in softness</li>
        </ul>
      </section>

      {/* Past Events */}
      <section className='max-w-5xl mx-auto'>
        <h2 className='text-2xl font-display text-brand-rosewood font-semibold text-center mb-4'>
          Previously on Dramatis…
        </h2>
        <ul className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-sm text-neutral-800 mb-12'>
          {pastEvents.map((title, i) => (
            <li
              key={i}
              className='bg-white p-4 rounded-xl shadow-card border border-brand-buttercream'>
              {title}
            </li>
          ))}
        </ul>

        <h2 className='text-2xl font-display text-brand-rosewood font-semibold text-center mb-4'>
          Coming Soon (If You Say Yes)
        </h2>
        <ul className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-sm text-neutral-800'>
          {upcomingIdeas.map((title, i) => (
            <li
              key={i}
              className='bg-white p-4 rounded-xl shadow-card border border-brand-buttercream'>
              {title}
            </li>
          ))}
        </ul>
      </section>

      {/* Final CTA */}
      <div className='text-center'>
        <p className='text-neutral-800 mb-4'>
          Membership is your ticket in. Events are limited, but the charm is not.
        </p>
        <a
          href={patreonLink}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 px-6 py-3 bg-brand-rosewood text-white rounded-xl font-medium hover:bg-neutral-900 transition'>
          Join the Club <Sparkles className='w-4 h-4' aria-hidden='true' />
        </a>
        <p className='text-xs text-neutral-600 mt-2'>
          Already a member? Check Patreon for your next RSVP.
        </p>
      </div>
    </div>
  );
}

export default Events;
