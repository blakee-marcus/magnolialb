import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Star, Ticket, Crown, ExternalLink, Users } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

import ThankYouModal from '../components/ThankYouModal';

import ZinePreview from '../assets/zine-preview.webp';
import GinNight from '../assets/gin-night.webp';
import BoardTips from '../assets/board-tips.webp';

const tierVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.6, ease: 'easeOut' },
  }),
};

const patreonLink = 'https://www.patreon.com/theatricaltable?subscribed=true';

const tiers = [
  {
    name: 'Opening Night',
    icon: <Star className='w-6 h-6 text-brand-buttercream' />,
    features: ['Monthly DIY recipe zine', 'Event pre-sales access', 'Curated shopping lists'],
  },
  {
    name: 'Headliner',
    icon: <Ticket className='w-6 h-6 text-brand-buttercream' />,
    features: [
      'All Opening Night perks',
      'Free local delivery on boards',
      '1 exclusive game night per month',
    ],
  },
  {
    name: 'Encore Club',
    icon: <Crown className='w-6 h-6 text-brand-buttercream' />,
    features: [
      'All Headliner perks',
      'Early tastings of new offerings',
      'Limited edition board add-ons',
      'VIP invites to gin nights',
    ],
  },
];

function Club() {
  const [showModal, setShowModal] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('subscribed') === 'true') {
      setShowModal(true);
    }
  }, [searchParams]);

  return (
    <div className='bg-brand-light text-brand-dark font-body px-6 py-20 space-y-28'>
      <ThankYouModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Helmet>
        <title>Join the Club | Dramatis Membership Tiers</title>
        <meta
          name='description'
          content='Support Dramatis and become part of our inner circle. Membership includes seasonal zines, board styling guides, game night invites, and surprise perks.'
        />
        <link rel='canonical' href='https://theatricaltable.com/subscribe' />
        <meta property='og:title' content='Join the Club | Dramatis' />
        <meta
          property='og:description'
          content='Step behind the curtain and into the heart of Dramatis. Exclusive perks, immersive moments, and a seat at the table await.'
        />
        <meta property='og:image' content='https://theatricaltable.com/og-subscribe.jpg' />
        <meta property='og:url' content='https://theatricaltable.com/subscribe' />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='text-center'>
        <h1 className='text-4xl md:text-5xl font-display font-bold text-brand-rosewood mb-4'>
          Join the Club
        </h1>
        <p className='text-lg text-neutral-800 max-w-2xl mx-auto'>
          Step into a slower, more sparkly life. With zines, events, and edible magic delivered to
          your door, this membership is your all-access pass to Dramatis.
        </p>
        <a
          href={patreonLink}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 mt-6 px-6 py-3 bg-brand-rosewood text-white rounded-xl font-medium hover:bg-brand-dark transition'>
          Join Us on Patreon <ExternalLink className='w-4 h-4' />
        </a>
      </motion.div>

      {/* Callout */}
      <div className='bg-brand-buttercream/50 border border-brand-buttercream rounded-2xl p-6 max-w-3xl mx-auto text-center shadow-card'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}>
          <div className='flex justify-center mb-2'>
            <Users className='w-6 h-6 text-brand-rosewood' />
          </div>
          <p className='text-lg font-medium text-brand-dark'>
            ✨ <span className='font-bold'>150+ patrons</span> have already taken their seat. Ready
            for yours?
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
            <h2 className='font-display text-2xl font-semibold text-brand-rosewood mb-2'>
              {tier.name}
            </h2>
            <ul className='text-sm text-neutral-800 mb-4 space-y-2'>
              {tier.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Perks Preview */}
      <section className='max-w-6xl mx-auto px-2'>
        <h2 className='text-3xl font-display text-center text-brand-rosewood mb-8'>
          Behind the Curtain
        </h2>
        <div className='grid gap-6 md:grid-cols-3'>
          {[
            {
              title: 'Sneak Peek: Spring Zine',
              image: ZinePreview,
              caption: 'Original cocktail recipes, picnic boards, and more.',
            },
            {
              title: 'Gin Night Moments',
              image: GinNight,
              caption: 'A custom gin experience for members only.',
            },
            {
              title: 'Board Styling Tips',
              image: BoardTips,
              caption: 'Patron-only tutorials to elevate your hosting game.',
            },
          ].map(({ title, image, caption }) => (
            <motion.div
              key={title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='rounded-xl bg-white shadow-card overflow-hidden'>
              <img src={image} alt={title} className='w-full h-48 object-cover object-center' />
              <div className='p-4'>
                <h3 className='font-display font-semibold text-lg text-brand-rosewood'>{title}</h3>
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
          href={patreonLink}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 px-6 py-3 bg-brand-rosewood text-white rounded-xl font-medium hover:bg-brand-dark transition'>
          Join Us on Patreon <ExternalLink className='w-4 h-4' />
        </a>
      </div>
    </div>
  );
}

export default Club;
