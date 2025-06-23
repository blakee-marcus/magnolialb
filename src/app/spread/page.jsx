'use client';

import Head from 'next/head';
import { ExternalLink, Sparkles } from 'lucide-react';

const patreonLink = 'https://www.patreon.com/theatricaltable';
const acuityLink = 'https://dramatis.acuityscheduling.com';

const boardOptions = [
  {
    name: 'The Matinée',
    guests: '2–4 guests',
    price: '$125',
    use: 'A romantic date night, small brunch, or gift',
  },
  {
    name: 'The Ensemble',
    guests: '5–8 guests',
    price: '$250',
    use: 'A gathering of friends or intimate soirée',
  },
  {
    name: 'The Headliner',
    guests: '9–15 guests',
    price: '$400',
    use: 'Birthdays, celebrations, gallery openings',
  },
];

export default function Spread() {
  return (
    <div className='bg-light text-dark font-body px-6 py-20 space-y-24'>
      <Head>
        <title>The Spread | Dramatis Grazing Boards</title>
        <meta
          name='description'
          content='Showstopping grazing experiences designed for drama, delight, and delicious detail. Handmade and styled by Dramatis.'
        />
        <link rel='canonical' href='https://dramatis.club/spread' />
        <meta property='og:title' content='The Spread | Dramatis Grazing Boards' />
        <meta
          property='og:description'
          content='Not just food — a curated edible scene. Book a handmade, styled grazing board for brunches, birthdays, and gatherings of all sizes.'
        />
        <meta
          property='og:image'
          content='https://www.dramatis.us/assets/dramatis-og-image.png'
        />
        <meta property='og:url' content='https://dramatis.club/spread' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <section className='text-center max-w-3xl mx-auto'>
        <h1 className='text-4xl md:text-5xl font-display font-bold text-rosewood mb-4'>
          The Spread
        </h1>
        <p className='italic text-neutral-800 mb-4'>Handmade. Hand-styled. Heart-stopping.</p>
        <p className='text-neutral-700'>
          Not just food — a curated edible scene. Welcome to The Spread, where every board is a
          performance in flavor and form. Think house-made dips, seasonal produce, artisanal carbs,
          and desserts that disappear in minutes.
        </p>
        <p className='text-neutral-700 mt-4'>
          Whether it’s brunch, birthdays, or board meetings, I bring the handmade abundance. Nothing
          store-bought. Nothing ordinary. Just delight, drama, and a damn good bite.
        </p>
      </section>

      <section className='max-w-4xl mx-auto text-center space-y-4'>
        <h2 className='text-2xl font-display text-rosewood font-semibold'>Board Sizes & Pricing</h2>
        <ul className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
          {boardOptions.map((board) => (
            <li
              key={board.name}
              className='bg-white p-6 rounded-xl shadow-md border-2 border-[#E3D57F] text-left'>
              <h3 className='text-lg font-semibold text-rosewood'>{board.name}</h3>
              <p className='text-sm text-neutral-700'>{board.guests}</p>
              <p className='text-sm text-neutral-700'>{board.price}</p>
              <p className='text-xs italic text-neutral-600 mt-2'>{board.use}</p>
            </li>
          ))}
        </ul>
        <p className='text-xs text-neutral-600'>
          Pricing includes ingredients, prep, and styling. Delivery billed separately.
        </p>
        <p className='text-xs text-neutral-600'>
          Want it boxed instead of board-style? Just ask — I’ve got options.
        </p>
      </section>

      <section className='max-w-3xl mx-auto text-center space-y-4'>
        <h2 className='text-2xl font-display text-rosewood font-semibold'>What’s Included</h2>
        <ul className='text-neutral-800 space-y-1'>
          <li>✨ Your choice of house-made spreads (pesto, tapenade, cheese balls)</li>
          <li>✨ Curated cheeses and charcuterie</li>
          <li>✨ Seasonal fruits & veggies</li>
          <li>✨ Artisan breads & crackers</li>
          <li>✨ Homemade sweets (lemon bars, fudge, mini trifles)</li>
          <li>✨ Crunchy bits, florals, and flair</li>
        </ul>
        <p className='text-sm text-neutral-700 mt-2'>
          Optional Add-Ons: Themed Boards (Pride, Movie Night), Brunch Builds, Full Table Styling
        </p>
      </section>

      <div className='text-center'>
        <a
          href={acuityLink}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 px-6 py-3 bg-rosewood text-white rounded-xl font-medium hover:bg-dark transition'>
          Book a Spread <Sparkles className='w-4 h-4' />
        </a>
      </div>
    </div>
  );
}
