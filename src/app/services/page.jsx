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

import { categories } from '@/data/serviceCategories';

export default function Services() {
  return (
    <div className='px-6 py-16 max-w-6xl mx-auto text-charcoalTeal'>
      <Head>
        <title>The Crew | Dramatis Lifestyle Services in Long Beach</title>
        <meta
          name='description'
          content='From light housekeeping to charcuterie staging and life admin support — Dramatis offers flexible, thoughtful lifestyle services in Long Beach. Your crew awaits.'
        />
        <meta
          name='keywords'
          content='lifestyle services Long Beach, personal assistant Long Beach, charcuterie styling, home rituals, mobile bartending, housekeeping services, Dramatis services'
        />
        <link rel='canonical' href='https://dramatis.club/services' />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content='The Crew | Lifestyle & Ritual Services by Dramatis' />
        <meta
          property='og:description'
          content='Support with style. From meal prep to mobile bartending, Dramatis offers practical and beautiful lifestyle services curated just for you.'
        />
        <meta
          property='og:image'
          content='https://magnolialb.vercel.app/images/dramatis-og-image.png'
        />
        <meta property='og:url' content='https://dramatis.club/services' />
        <meta property='og:site_name' content='Dramatis' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='The Crew | Dramatis Lifestyle Services in Long Beach' />
        <meta
          name='twitter:description'
          content='Book personalized support and home rituals with Dramatis. Practical help meets curated care — now available in Long Beach.'
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
              '@type': 'LocalBusiness',
              name: 'Dramatis',
              url: 'https://dramatis.club/services',
              image: 'https://magnolialb.vercel.app/images/dramatis-og-image.png',
              description:
                'Dramatis is a lifestyle service provider based in Long Beach offering curated support including light housekeeping, charcuterie styling, mobile bartending, and home rituals.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Long Beach',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
              sameAs: [
                'https://instagram.com/theatricaltable',
                'https://patreon.com/theatricaltable',
              ],
            }),
          }}
        />
      </Head>

      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeIn}
        className='text-center max-w-2xl mx-auto mb-16'>
        <h1 className='text-4xl md:text-5xl font-display font-bold text-rosewood mb-4'>The Crew</h1>
        <p className='italic text-neutral-800 mb-2'>This isn’t stagecraft — it’s Lifecraft.</p>
        <p className='text-neutral-700'>
          Behind every unforgettable moment is someone making it look effortless — calm, focused,
          and invisibly brilliant. That’s what I do. Whether it's managing daily chaos or setting
          the stage for a small victory, I’m the backstage crew for your real life — making the
          everyday run smoother than a scene change.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24'>
        {categories.map((cat) => (
          <motion.a
            key={cat.name}
            href={`#${cat.anchor}`}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className='relative block group p-6 rounded-2xl shadow-card bg-white border border-buttercream hover:bg-buttercream/40 transition duration-300 overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-rosewood/10 to-transparent opacity-0 group-hover:opacity-20 transition z-0' />
            <div className='relative z-10'>
              <h2 className='text-lg font-display font-semibold text-rosewood mb-1 flex items-center gap-2'>
                <Sparkles className='w-4 h-4 text-mulberry opacity-60 group-hover:opacity-100 transition' />
                {cat.name}
              </h2>
              <p className='text-sm text-neutral-700'>{cat.description}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className='text-center mb-24'>
        <a
          href='https://dramatis.acuityscheduling.com'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rosewood text-white font-medium hover:bg-mulberry transition shadow-lg'>
          Reserve Now <Sparkles className='w-4 h-4' aria-hidden='true' />
        </a>
        <p className='text-xs text-neutral-600 mt-2'>
          Includes 30 min round-trip travel. Additional time billed at $10 per 15 min.
        </p>
      </div>

      <div className='space-y-20'>
        {categories.map((cat) => (
          <section
            key={cat.anchor}
            id={cat.anchor}
            className='p-6 rounded-2xl border border-mulberry shadow-[0_2px_10px_rgba(126,74,95,0.2)] hover:shadow-[0_4px_20px_rgba(126,74,95,0.3)] hover:border-mulberry/80 transition duration-300 bg-white hover:bg-buttercream/30'>
            <h2 className='text-xl font-display font-semibold mb-1 bg-gradient-to-r from-rosewood via-mulberry to-rosewood bg-clip-text text-transparent group-hover:underline'>
              {cat.name}
            </h2>
            <p className='text-neutral-700 mb-6'>{cat.description}</p>
            <ul className='space-y-4'>
              {cat.offerings?.map((item) => (
                <li
                  key={item.title}
                  className='p-4 rounded-xl border-2 border-mulberry shadow-sm hover:shadow-lg transition-all duration-200 hover:bg-buttercream/30 bg-white backdrop-blur-sm'>
                  <h3 className='font-semibold text-lg text-mulberry mb-1 flex items-center gap-2'>
                    <Sparkles className='w-4 h-4 text-mulberry opacity-70' />
                    {item.title}
                  </h3>
                  <p className='text-sm text-neutral-800'>
                    <strong>Time:</strong> {item.time} &nbsp;|&nbsp; <strong>Price:</strong>{' '}
                    {item.price}
                  </p>
                  {item.notes && (
                    <p className='text-xs text-neutral-600 italic mt-1'>{item.notes}</p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
