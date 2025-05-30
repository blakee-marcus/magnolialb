import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  CalendarHeart,
  ShoppingBasket,
  Sparkles,
  CalendarDays,
  Flame,
  ScrollText,
  UtensilsCrossed,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.6, ease: 'easeOut' },
  }),
};

const carouselItems = [
  {
    title: 'Friday Game Night',
    desc: 'Join us this Friday at 7 PM for cozy board games, grazing bites, and casual drinks. First-timers welcome!',
    icon: <CalendarDays className='w-6 h-6 text-brand-secondary' />,
  },
  {
    title: 'Magic: The Gathering Draft',
    desc: 'Saturday afternoon we’re drafting a spicy set — bring your best bluff and let the drama unfold.',
    icon: <ScrollText className='w-6 h-6 text-brand-secondary' />,
  },
  {
    title: 'Hot Drop: Summer Zine',
    desc: 'Our new zine just landed for patrons! Featuring recipes, hosting rituals, and our June flavor palette.',
    icon: <Flame className='w-6 h-6 text-brand-secondary' />,
  },
  {
    title: 'Custom Board Preorders Open',
    desc: 'Now accepting limited custom orders for Pride Week! Local pickup and delivery available.',
    icon: <UtensilsCrossed className='w-6 h-6 text-brand-secondary' />,
  },
];

function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <>
      <Helmet>
        <title>Theatrical Table | A Third Space for Boards, Brews & Belonging</title>
        <meta
          name='description'
          content='Welcome to Theatrical Table — your cozy third space for charcuterie boards, coffee, game nights, and seasonal subscriptions. Come sit with us.'
        />
        <link rel='canonical' href='https://theatricaltable.com/' />
        <meta
          property='og:title'
          content='Theatrical Table | A Third Space for Boards, Brews & Belonging'
        />
        <meta
          property='og:description'
          content='Join us for grazing boards, curated events, and cozy community vibes inspired by coffee, board games, and the light side of the Force.'
        />
        <meta property='og:image' content='/assets/theatrical-og-image.jpg' />
        <meta property='og:url' content='https://theatricaltable.com/' />
        <meta name='twitter:card' content='summary_large_image' />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Theatrical Table',
            url: 'https://theatricaltable.com/',
            logo: 'https://theatricaltable.com/assets/theatrical-og-image.jpg',
            image: 'https://theatricaltable.com/assets/theatrical-og-image.jpg',
            description:
              'Theatrical Table is a cozy third space offering curated grazing boards, immersive game nights, coffee culture, and lifestyle subscriptions.',
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
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
              opens: '10:00',
              closes: '22:00',
            },
          })}
        </script>

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Friday Game Night',
            startDate: '2025-05-30T19:00:00-07:00',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            location: {
              '@type': 'Place',
              name: 'Theatrical Table',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Long Beach',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
            },
            image: ['https://theatricaltable.com/assets/game-night-preview.jpg'],
            description:
              'Join us for our Friday Game Night — with curated grazing bites, cozy community, and cards on the table.',
            offers: {
              '@type': 'Offer',
              url: 'https://theatricaltable.com/events',
              price: '0',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
            performer: {
              '@type': 'PerformingGroup',
              name: 'Theatrical Table Crew',
            },
          })}
        </script>
      </Helmet>

      <div className='bg-brand-light text-brand-dark font-body'>
        {/* Hero */}
        <section className='min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-20'>
          <motion.h1
            className='text-4xl md:text-6xl font-display font-bold text-brand-primary mb-4'
            initial='hidden'
            animate='visible'
            variants={fadeInUp}>
            Welcome to Theatrical Table
          </motion.h1>
          <motion.p
            className='max-w-2xl text-lg text-neutral-800 mb-6'
            initial='hidden'
            animate='visible'
            custom={2}
            variants={fadeInUp}>
            A cozy third space where food meets play, and stories are shared over charcuterie and
            coffee. We host gatherings that nourish the senses and spark connection — all with a
            touch of theatrical flair.
          </motion.p>
          <motion.div initial='hidden' animate='visible' custom={3} variants={fadeInUp}>
            <Link
              to='/boards'
              className='inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-xl font-medium hover:bg-brand-dark transition'>
              Explore Our Boards <Sparkles className='w-4 h-4' />
            </Link>
          </motion.div>
        </section>

        {/* Feature Cards */}
        <section className='grid gap-8 px-6 pb-20 md:grid-cols-3 max-w-7xl mx-auto'>
          {[
            {
              title: 'Grazing Boards & Boxes',
              icon: <ShoppingBasket className='w-8 h-8 text-brand-secondary' />,
              desc: 'Artfully arranged bites designed to delight — from date nights to celebrations, each board is a feast for the senses.',
              to: '/boards',
            },
            {
              title: 'Themed Events & Nights',
              icon: <CalendarHeart className='w-8 h-8 text-brand-secondary' />,
              desc: 'From MTG to gin tastings and board game socials, our events are made to connect and enchant — no costumes required (but they’re welcome).',
              to: '/events',
            },
            {
              title: 'Subscription Magic',
              icon: <Sparkles className='w-8 h-8 text-brand-secondary' />,
              desc: 'Join our Patreon to get zines, seasonal guides, and early access to curated experiences — it’s like a love letter in your inbox.',
              to: '/subscribe',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className='bg-white shadow-card rounded-2xl p-6 text-center flex flex-col items-center justify-between'
              custom={i + 1}
              initial='hidden'
              animate='visible'
              variants={fadeInUp}>
              <div className='mb-4'>{card.icon}</div>
              <h3 className='font-display text-xl font-semibold mb-2 text-brand-primary'>
                {card.title}
              </h3>
              <p className='text-sm text-neutral-800 mb-4'>{card.desc}</p>
              <Link
                to={card.to}
                className='text-brand-secondary underline underline-offset-4 hover:text-brand-primary transition'>
                Learn More →
              </Link>
            </motion.div>
          ))}
        </section>

        {/* What's Happening This Week */}
        <section className='max-w-3xl mx-auto px-6 py-16 text-center'>
          <h2 className='text-3xl font-display font-semibold text-brand-primary mb-6'>
            What’s Happening This Week
          </h2>

          <div
            className='relative h-60'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}>
            <AnimatePresence mode='wait'>
              <motion.div
                key={carouselIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className='absolute inset-0 flex flex-col justify-center items-center bg-white shadow-card rounded-2xl px-8 py-6 text-center'>
                <div className='mb-3'>{carouselItems[carouselIndex].icon}</div>
                <h3 className='text-xl font-display font-semibold text-brand-primary mb-1'>
                  {carouselItems[carouselIndex].title}
                </h3>
                <p className='text-sm text-neutral-800 max-w-sm'>
                  {carouselItems[carouselIndex].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Nav Controls */}
            <div className='absolute inset-y-0 left-0 flex items-center'>
              <button
                onClick={() =>
                  setCarouselIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
                }
                className='bg-white shadow rounded-full p-2 hover:bg-brand-secondary/20 transition'
                aria-label='Previous slide'>
                <ChevronLeft className='w-5 h-5 text-brand-primary' />
              </button>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center'>
              <button
                onClick={() => setCarouselIndex((prev) => (prev + 1) % carouselItems.length)}
                className='bg-white shadow rounded-full p-2 hover:bg-brand-secondary/20 transition'
                aria-label='Next slide'>
                <ChevronRight className='w-5 h-5 text-brand-primary' />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
