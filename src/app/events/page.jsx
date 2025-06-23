'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.6, ease: 'easeOut' },
  }),
};

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

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>
          Dramatis Events | Curated Gatherings, Game Nights & Creative Salons in Long Beach
        </title>
        <meta
          name='description'
          content='Discover immersive, members-only events at Dramatis — from themed salons and drag shows to game tournaments and cocktail rituals. Join the scene in Long Beach.'
        />
        <meta
          name='keywords'
          content='Dramatis events, Long Beach gatherings, creative salons, immersive events, game night club, charcuterie events, drag shows, MTG events, social experiences, Dramatis Long Beach'
        />
        <link rel='canonical' href='https://www.dramatis.us/events' />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Dramatis Events | Game Nights & Gatherings in Long Beach'
        />
        <meta
          property='og:description'
          content='From ghost stories to gin nights, Dramatis events are handmade experiences for creative souls. Explore past and upcoming happenings in Long Beach.'
        />
        <meta
          property='og:image'
          content='https://www.dramatis.us/images/dramatis-og-image.png'
        />
        <meta property='og:url' content='https://www.dramatis.us/events' />
        <meta property='og:site_name' content='Dramatis' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Dramatis Events | Game Nights & Gatherings in Long Beach'
        />
        <meta
          name='twitter:description'
          content='Join immersive and themed events at Dramatis — a third space for community, creativity, and edible enchantment.'
        />
        <meta
          name='twitter:image'
          content='https://www.dramatis.us/images/dramatis-og-image.png'
        />

        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EventSeries',
              name: 'Dramatis Events',
              organizer: {
                '@type': 'Organization',
                name: 'Dramatis',
                url: 'https://www.dramatis.us',
              },
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              location: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Long Beach',
                  addressRegion: 'CA',
                  addressCountry: 'US',
                },
              },
              description:
                'A rotating series of curated, small-scale social events including board game salons, drag nights, themed mixers, and immersive gatherings hosted by Dramatis in Long Beach.',
            }),
          }}
        />
      </Head>

      <div className='text-neutral-900 font-body px-6 py-20 space-y-24 bg-neutral-50'>
        {/* Hero Section */}
        <motion.div
          initial='hidden'
          animate='visible'
          variants={fadeIn}
          className='text-center max-w-3xl mx-auto space-y-4'>
          <h1 className='text-4xl md:text-5xl font-display font-bold text-rosewood'>
            Come for the Charcuterie. Stay for the Scene.
          </h1>
          <p className='text-lg text-neutral-700'>
            I host gatherings with taste — board game salons, kitchen witch covens, cocktail
            theatrics. Nights designed to nourish connection.
          </p>
          <a
            href='/subscribe'
            className='inline-flex items-center gap-2 px-6 py-3 bg-rosewood text-white rounded-full font-medium hover:bg-neutral-900 transition-all shadow-md'>
            Become a Member <Sparkles className='w-4 h-4' />
          </a>
        </motion.div>

        {/* What to Expect */}
        <section className='max-w-4xl mx-auto text-center space-y-6'>
          <h2 className='text-2xl font-display text-rosewood font-semibold'>What to Expect</h2>
          <ul className='text-neutral-800 grid sm:grid-cols-2 gap-4 text-left'>
            {[
              '✨ Private, members-only access',
              '✨ Styled spreads and signature drinks',
              '✨ Lo-fi games, icebreakers, or shared rituals',
              '✨ Themed experiences (think tarot, tea, or table reads)',
              '✨ A takeaway touch — always charming, never cheesy',
              '✨ Alcohol included, not upsold (I’m not that brand)',
            ].map((item, i) => (
              <li
                key={i}
                className='bg-white border border-buttercream rounded-xl p-4 shadow-sm hover:shadow-md transition'>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* How It Works */}
        <section className='bg-mist/40 py-12 rounded-3xl max-w-4xl mx-auto text-center space-y-6 px-6 md:px-12'>
          <h2 className='text-2xl font-display text-rosewood font-semibold'>
            How the Curtain Rises
          </h2>
          <ul className='text-neutral-700 space-y-2'>
            <li>1. Choose your tier — sign up through my secure checkout</li>
            <li>2. Get access — I’ll send invites directly to your inbox</li>
            <li>3. Claim your seat — space is limited, vibes are not</li>
            <li>4. Show up — in style, in spirit, in softness</li>
          </ul>
        </section>

        {/* Past & Upcoming */}
        <section className='max-w-5xl mx-auto space-y-16'>
          <div>
            <h2 className='text-2xl font-display text-rosewood font-semibold text-center mb-6'>
              Previously on Dramatis…
            </h2>
            <ul className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-sm text-neutral-800'>
              {pastEvents.map((title, i) => (
                <li
                  key={i}
                  className='bg-white p-4 rounded-xl border border-neutral-200 hover:border-rosewood transition-all shadow-sm'>
                  {title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='text-2xl font-display text-rosewood font-semibold text-center mb-6'>
              Coming Soon (If You Say Yes)
            </h2>
            <ul className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-sm text-neutral-800'>
              {upcomingIdeas.map((title, i) => (
                <li
                  key={i}
                  className='bg-white p-4 rounded-xl border border-neutral-200 hover:border-mulberry transition-all shadow-sm'>
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <div className='text-center'>
          <p className='text-neutral-700 mb-4'>
            Membership is your ticket in. The gatherings are small — the magic is not.
          </p>
          <a
            href='/subscribe'
            className='inline-flex items-center gap-2 px-6 py-3 bg-rosewood text-white rounded-full font-medium hover:bg-neutral-900 transition-all shadow-md'>
            Become a Member <Sparkles className='w-4 h-4' />
          </a>
          <p className='text-xs text-neutral-600 mt-2'>
            Already joined? Check your inbox for your next RSVP.
          </p>
        </div>
      </div>
    </>
  );
}
