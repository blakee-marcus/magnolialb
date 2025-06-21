'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Star, Ticket, Crown, ExternalLink, Users } from 'lucide-react';

import ThankYouModal from '@/components/ThankYouModal';

const subscribeLink = '/subscribe';

const tierVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.6, ease: 'easeOut' },
  }),
};

const tiers = [
  {
    name: 'Opening Night',
    icon: <Star className='w-6 h-6 text-buttercream' aria-hidden='true' />,
    features: ['Monthly DIY recipe zine', 'Event pre-sales access', 'Curated shopping lists'],
  },
  {
    name: 'Headliner',
    icon: <Ticket className='w-6 h-6 text-buttercream' aria-hidden='true' />,
    features: [
      'All Opening Night perks',
      'Free local delivery on boards',
      '1 exclusive game night per month',
    ],
  },
  {
    name: 'Encore Club',
    icon: <Crown className='w-6 h-6 text-buttercream' aria-hidden='true' />,
    features: [
      'All Headliner perks',
      'Early tastings of new offerings',
      'Limited edition board add-ons',
      'VIP invites to gin nights',
    ],
  },
];

export default function ClubPage() {
  return (
    <>
      <Head>
        <title>Join the Club | Dramatis Memberships for Food & Game Lovers in Long Beach</title>
        <meta
          name='description'
          content='Support Dramatis and become part of our inner circle. Club members enjoy seasonal zines, board styling tips, exclusive game nights, and local delivery perks.'
        />
        <meta
          name='keywords'
          content='Dramatis membership, Long Beach events, charcuterie subscription, game night club, food zines, board styling, gin tastings, local food community'
        />
        <link rel='canonical' href='https://magnolialb.vercel.app/subscribe' />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Join the Club | Dramatis Memberships' />
        <meta
          property='og:description'
          content='Step into Dramatis’ members-only club: zines, styling tips, early event access, and edible perks that bring people together.'
        />
        <meta
          property='og:image'
          content='https://magnolialb.vercel.app/images/dramatis-og-image.png'
        />
        <meta property='og:url' content='https://magnolialb.vercel.app/subscribe' />
        <meta property='og:site_name' content='Dramatis' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Join the Club | Dramatis Memberships' />
        <meta
          name='twitter:description'
          content='Zines, styling tips, gin nights, and more — discover what it means to be part of Dramatis.'
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
                'Dramatis is a Long Beach-based third-space brand offering charcuterie boards, coffee, and a game night membership program filled with curated perks and seasonal experiences.',
              sameAs: [
                'https://instagram.com/theatricaltable',
                'https://patreon.com/theatricaltable',
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

      <div className='text-neutral-900 font-body px-6 py-20 space-y-28'>
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='text-center'>
          <h1 className='text-4xl md:text-5xl font-display font-bold text-rosewood mb-4'>
            Join the Club
          </h1>
          <p className='text-lg text-neutral-800 max-w-2xl mx-auto'>
            Step into a slower, more sparkly life. With zines, events, and edible magic delivered to
            your door, this membership is your all-access pass to Dramatis.
          </p>
          <a
            href={subscribeLink}
            className='inline-flex items-center gap-2 mt-6 px-6 py-3 bg-rosewood text-white rounded-xl font-medium hover:bg-neutral-900 transition'>
            Subscribe Now <ExternalLink className='w-4 h-4' aria-hidden='true' />
          </a>
        </motion.div>

        {/* Callout */}
        <div className='bg-buttercream/50 border border-buttercream rounded-2xl p-6 max-w-3xl mx-auto text-center shadow-card'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}>
            <div className='flex justify-center mb-2'>
              <Users className='w-6 h-6 text-rosewood' aria-hidden='true' />
            </div>
            <p className='text-lg font-medium text-neutral-900'>
              ✨ <span className='font-bold'>150+ members</span> have already taken their seat.
              Ready for yours?
            </p>
          </motion.div>
        </div>

        {/* Tiers */}
        <div className='grid gap-8 md:grid-cols-3 max-w-7xl mx-auto'>
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              custom={i}
              initial='hidden'
              animate='visible'
              variants={tierVariants}
              className='bg-white shadow-dramatic rounded-2xl p-6 flex flex-col items-center text-center'>
              <div className='mb-4'>{tier.icon}</div>
              <h2 className='font-display text-2xl font-semibold text-rosewood mb-2'>
                {tier.name}
              </h2>
              <ul className='text-sm text-neutral-900 mb-4 space-y-2'>
                {tier.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Perks Preview */}
        <section className='max-w-6xl mx-auto px-2'>
          <h2 className='text-3xl font-display text-center text-rosewood mb-8'>
            Behind the Curtain
          </h2>
          <div className='grid gap-6 md:grid-cols-3'>
            {[
              {
                title: 'Sneak Peek: Spring Zine',
                image: '/images/zine-preview.webp',
                caption: 'Original cocktail recipes, picnic boards, and more.',
              },
              {
                title: 'Gin Night Moments',
                image: '/images/gin-night.webp',
                caption: 'A custom gin experience for members only.',
              },
              {
                title: 'Board Styling Tips',
                image: '/images/board-tips.webp',
                caption: 'Member-only tutorials to elevate your hosting game.',
              },
            ].map(({ title, image, caption }) => (
              <motion.div
                key={title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className='rounded-xl bg-white shadow-card overflow-hidden'>
                <Image
                  src={image}
                  alt={title}
                  className='w-full h-48 object-cover object-center'
                  width={600}
                  height={400}
                />
                <div className='p-4'>
                  <h3 className='font-display font-semibold text-lg text-rosewood'>{title}</h3>
                  <p className='text-sm text-neutral-800'>{caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className='text-center mt-16'>
          <p className='text-neutral-800 mb-4'>The table is set. The curtain’s about to rise.</p>
          <a
            href={subscribeLink}
            className='inline-flex items-center gap-2 px-6 py-3 bg-rosewood text-white rounded-xl font-medium hover:bg-neutral-900 transition'>
            Subscribe Now <ExternalLink className='w-4 h-4' aria-hidden='true' />
          </a>
        </div>
      </div>
    </>
  );
}
