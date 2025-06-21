'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function SubscribePage() {
  const handleSubscribe = async (tier) => {
    const res = await fetch('/api/subscribe/checkout', {
      method: 'POST',
      body: JSON.stringify({ tier }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Something went wrong.');
    }
  };

  const tiers = [
    {
      name: 'The Ensemble',
      price: '$30',
      subtitle: '6-month membership · $5/mo',
      perks: [
        'Access to Dramatis Discord',
        'Monthly Digital Zine (PDF or Web)',
        'Livestream classes (rituals, lessons, etc.)',
        'Member polls/surveys to shape future content',
        'Early RSVP for Dramatis-hosted events',
      ],
      tierKey: 'ensemble',
    },
    {
      name: 'The Inner Circle',
      price: '$72',
      subtitle: '6-month membership · $12/mo',
      perks: [
        'Everything in The Ensemble',
        'Access to DIY Video Vault (mini-lessons)',
        'Downloadables: ritual templates, mantra cards, mood boards',
        'Behind-the-scenes planning & seasonal sneak peeks',
        'Seasonal Spotify playlists & style guides',
      ],
      tierKey: 'inner-circle',
    },
    {
      name: 'The Lead',
      price: '$150',
      subtitle: '6-month membership · $25/mo',
      perks: [
        'Everything in Inner Circle',
        'Quarterly Physical Drop (zine, snack, stickers, branded items)',
        'VIP early booking for high-demand events',
        'Seasonal gift or mini ritual tool',
        'Optional credit in Zine or website',
        'Priority customer service & booking channel',
      ],
      tierKey: 'lead',
    },
  ];

  return (
    <div className='px-6 py-20 max-w-4xl mx-auto text-dark font-body'>
      <Head>
        <title>Subscribe | Dramatis Membership Tiers & Perks</title>
        <meta
          name='description'
          content='Choose your Dramatis membership and gain access to zines, digital rituals, exclusive events, and seasonal care kits. Tiers starting at just $5/month.'
        />
        <meta
          name='keywords'
          content='Dramatis membership, subscribe to zines, digital rituals, Long Beach events, community membership, creative subscription, seasonal care kits, ritual templates'
        />
        <link rel='canonical' href='https://magnolialb.vercel.app/subscribe' />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Dramatis Membership | Subscribe to Zines, Events & Rituals'
        />
        <meta
          property='og:description'
          content='Join the Dramatis inner circle. Access zines, digital perks, member-only events, and surprise delights — starting at just $5/month.'
        />
        <meta
          property='og:image'
          content='https://magnolialb.vercel.app/images/dramatis-og-image.png'
        />
        <meta property='og:url' content='https://magnolialb.vercel.app/subscribe' />
        <meta property='og:site_name' content='Dramatis' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Dramatis Membership | Tiers & Seasonal Perks' />
        <meta
          name='twitter:description'
          content='Support Dramatis and unlock behind-the-scenes access, curated content, and quarterly care drops. Join the scene today.'
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
              url: 'https://magnolialb.vercel.app/subscribe',
              logo: 'https://magnolialb.vercel.app/images/dramatis-og-image.png',
              description:
                'Dramatis is a creative lifestyle brand offering curated memberships that include zines, rituals, and immersive events in Long Beach and beyond.',
              sameAs: [
                'https://instagram.com/dramatis',
                'https://patreon.com/dramatis',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Long Beach',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
            }),
          }}
        />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-display font-bold text-rosewood mb-4'>
          Dramatis Membership
        </h1>
        <p className='text-lg text-neutral-800 max-w-2xl mx-auto'>
          Join a curated community of charm, calm, and ceremony. Choose your level of connection and
          unlock access to seasonal zines, digital perks, and surprise delights — all designed to
          bring meaning to your rituals and richness to your calendar.
        </p>
      </motion.div>

      <div className='grid gap-10 md:grid-cols-3'>
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
            className='bg-white border border-buttercream shadow-card rounded-xl p-6 text-center flex flex-col'>
            <h2 className='text-xl font-display font-semibold text-rosewood mb-1'>{tier.name}</h2>
            <p className='text-sm text-neutral-700 mb-4'>{tier.subtitle}</p>
            <ul className='text-sm text-neutral-800 mb-6 text-left space-y-2'>
              {tier.perks.map((perk, i) => (
                <li key={i}>• {perk}</li>
              ))}
            </ul>
            <button
              onClick={() => handleSubscribe(tier.tierKey)}
              className='mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-rosewood text-white rounded-xl font-medium hover:bg-neutral-900 transition'>
              Subscribe for {tier.price} <ExternalLink className='w-4 h-4' />
            </button>
            <p className='text-xs text-neutral-600 mt-2'>Redirects to a secure Stripe checkout</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
