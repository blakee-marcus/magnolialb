import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Heart, PartyPopper } from 'lucide-react';

import ClassicBoard from '../assets/classic-board.webp';
import SweetBoard from '../assets/sweet-board.webp';
import PartyBoard from '../assets/party-board.webp';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.6, ease: 'easeOut' },
  }),
};

const boards = [
  {
    name: 'Classic Charcuterie',
    image: ClassicBoard,
    description:
      'A well-balanced board featuring fine cured meats, aged cheeses, seasonal fruits, and artisan crackers.',
    icon: <UtensilsCrossed className='w-6 h-6 text-brand-secondary' />,
  },
  {
    name: 'Sweetheart Spread',
    image: SweetBoard,
    description:
      'Fruits, chocolates, and delicate pastries arranged to wow for date nights, anniversaries, or just self-love.',
    icon: <Heart className='w-6 h-6 text-brand-secondary' />,
  },
  {
    name: 'Celebration Feast',
    image: PartyBoard,
    description:
      'A bold board for big moments — with themed elements, dips, color pops, and optional bottle pairings.',
    icon: <PartyPopper className='w-6 h-6 text-brand-secondary' />,
  },
];

function Boards() {
  return (
    <div className='bg-brand-light text-brand-dark font-body px-6 py-20 space-y-24'>
      <Helmet>
        <title>Grazing Boards | Theatrical Table</title>
        <meta
          name='description'
          content='Gourmet grazing boards and charcuterie boxes crafted for joy, conversation, and special occasions. Local delivery available.'
        />
        <meta
          name='keywords'
          content='charcuterie boards Long Beach, grazing boxes, food styling, party platters, custom boards, Theatrical Table'
        />
        <link rel='canonical' href='https://theatricaltable.com/boards' />
        <meta property='og:title' content='Grazing Boards | Theatrical Table' />
        <meta
          property='og:description'
          content='Discover our dramatic, delicious grazing boards — crafted to spark connection and feed the senses.'
        />
        <meta property='og:url' content='https://theatricaltable.com/boards' />
        <meta property='og:image' content='https://theatricaltable.com/assets/classic-board.webp' />

        {/* Structured Data for Product Rich Snippets */}
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Grazing Boards',
            itemListElement: [
              {
                '@type': 'Product',
                name: 'Classic Charcuterie',
                image: 'https://theatricaltable.com/assets/classic-board.webp',
                description:
                  'A well-balanced board featuring fine cured meats, aged cheeses, seasonal fruits, and artisan crackers.',
                offers: {
                  '@type': 'Offer',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                  url: 'https://theatricaltable.com/boards',
                },
              },
              {
                '@type': 'Product',
                name: 'Sweetheart Spread',
                image: 'https://theatricaltable.com/assets/sweet-board.webp',
                description:
                  'Fruits, chocolates, and delicate pastries arranged to wow for date nights, anniversaries, or just self-love.',
                offers: {
                  '@type': 'Offer',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                  url: 'https://theatricaltable.com/boards',
                },
              },
              {
                '@type': 'Product',
                name: 'Celebration Feast',
                image: 'https://theatricaltable.com/assets/party-board.webp',
                description:
                  'A bold board for big moments — with themed elements, dips, color pops, and optional bottle pairings.',
                offers: {
                  '@type': 'Offer',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                  url: 'https://theatricaltable.com/boards',
                },
              },
            ],
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
          Boards That Tell a Story
        </h1>
        <p className='text-lg text-neutral-800'>
          Curated with color, texture, and drama — our grazing boards are crafted to feed your
          senses and spark conversation. Available for pickup, delivery, or select events.
        </p>
      </motion.div>

      {/* Board Grid */}
      <section className='grid gap-8 md:grid-cols-3 max-w-7xl mx-auto'>
        {boards.map((board, i) => (
          <motion.div
            key={board.name}
            custom={i}
            initial='hidden'
            whileInView='visible'
            variants={fadeIn}
            viewport={{ once: true }}
            className='bg-white rounded-2xl shadow-card overflow-hidden flex flex-col'>
            <img
              src={board.image}
              alt={board.name}
              className='w-full h-48 object-cover object-center'
            />
            <div className='p-6 flex flex-col flex-grow'>
              <div className='mb-2'>{board.icon}</div>
              <h2 className='font-display text-xl font-semibold text-brand-primary mb-2'>
                {board.name}
              </h2>
              <p className='text-sm text-neutral-800 mb-4 flex-grow'>{board.description}</p>
              <a
                href='mailto:orders@theatricaltable.com?subject=Board Inquiry'
                className='inline-block mt-auto text-brand-secondary font-medium underline underline-offset-4 hover:text-brand-primary transition'>
                Inquire Now →
              </a>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Final CTA */}
      <div className='text-center mt-12'>
        <p className='text-neutral-800 mb-4'>
          Looking for something custom? We love a creative challenge.
        </p>
        <a
          href='mailto:orders@theatricaltable.com'
          className='inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-xl font-medium hover:bg-brand-dark transition'>
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Boards;
