import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const categories = [
  {
    name: 'Home & Life',
    description:
      'Clear the clutter, calm the chaos. From laundry to house-sitting, we handle the mess so you can exhale — with dignity always folded in.',
    anchor: 'home-life',
    offerings: [
      {
        title: 'Light Cleaning',
        time: '2 hours',
        price: '$60',
        notes: 'Basic tidying and surface refresh — just enough to reset the vibe.',
      },
      {
        title: 'Laundry',
        time: '2 hours',
        price: '$60',
        notes: 'Client provides detergent; we bring the fold-and-flair.',
      },
      {
        title: 'House Sitting (No Pets)',
        time: '12–24 hours',
        price: '$100–$150',
        notes: 'Plant care, mail, trash. No drama, just peace of mind.',
      },
    ],
  },
  {
    name: 'Food & Kitchen',
    description:
      'Homemade help, minus the burnout. Whether it’s a stocked fridge or a plated moment, we’ve got you.',
    anchor: 'food-kitchen',
    offerings: [
      {
        title: 'Meal Prep (3 Days)',
        time: '2 hours',
        price: '$60',
        notes: '6–9 meals; colorful, cozy, and stress-free.',
      },
      { title: 'Meal Prep (6 Days)', time: '4 hours', price: '$120', notes: '10–18 meals' },
      { title: 'Meal Prep (7 Days)', time: '5 hours', price: '$150', notes: '21 meals' },
      {
        title: 'Menu Planning + Consultation',
        time: '2 hours',
        price: '$60',
        notes: '1 hour with you, 1 hour solo scheming. Meal magic, made practical.',
      },
      {
        title: 'Grocery Shopping (Add-On)',
        time: '2 hours',
        price: '$60',
        notes: 'Receipt reimbursed, fridge fulfilled.',
      },
      {
        title: 'Personal Chef (1–2 guests)',
        time: '2.5 hours',
        price: '$75',
        notes: 'Dinner party meets cozy night in. We cook. You glow.',
      },
      {
        title: 'Personal Chef (7–8 guests)',
        time: '4 hours',
        price: '$120',
        notes: 'Sociable, stylish, and just the right amount of extra.',
      },
    ],
  },
  {
    name: 'Events & Experiences',
    description:
      'Memorable, not manic. Let us stage-manage your soirée so you can stay in the scene, not the logistics.',
    anchor: 'events-experiences',
    offerings: [
      {
        title: 'Mobile Bartending',
        time: '5-hour minimum',
        price: '$225+',
        notes: 'Setup, strike, and service — you sip, we script. $45/hr extra time.',
      },
      {
        title: 'Grazing Board + Beverage Setup',
        time: '5-hour minimum',
        price: '$225+',
        notes: 'Looks good, tastes better. Add drama (the fun kind). $45/hr extra time.',
      },
    ],
  },
  {
    name: 'Style & Self',
    description:
      'A little structure, a lot of sparkle. From gifting guidance to closet calm, let’s elevate the everyday.',
    anchor: 'style-self',
    offerings: [
      {
        title: 'Habit Tracking & Coaching',
        time: '4 weeks',
        price: '$300',
        notes: 'Gentle nudges and ritual reminders — the stylish kind of accountability.',
      },
      {
        title: 'Thrifting',
        time: '5 hours',
        price: '$150',
        notes: 'Wardrobe whimsy or home refresh. You choose, we wander.',
      },
    ],
  },
  {
    name: 'Mind & Space',
    description:
      'Energy cleared. Intentions set. From affirmations to sacred corners, this is interior work with style.',
    anchor: 'mind-space',
    offerings: [
      {
        title: 'Daily Affirmation Coaching',
        time: '4 weeks',
        price: '$300',
        notes: 'Soulful pep talks, daily prompts, and weekly check-ins — no toxic positivity.',
      },
      {
        title: 'Creating Sacred Space',
        time: '5 hours',
        price: '$150',
        notes: 'From mood boards to altar corners. Let’s make space for what matters.',
      },
    ],
  },
  {
    name: 'Pet & Plant Care',
    description: 'Bark, bloom, or both — we care with intention and a treat in hand.',
    anchor: 'pet-plant-care',
    offerings: [
      {
        title: 'Dog Walking',
        time: '30 minutes',
        price: '$30',
        notes: 'Solo strolls with sniffs and structure.',
      },
      {
        title: 'Dog Sitting – Drop-In',
        time: '45 minutes',
        price: '$40',
        notes: 'A check-in with care and cuddles.',
      },
      {
        title: 'Dog Sitting – Overnight',
        time: '12 hours',
        price: '$125',
        notes: 'We tuck them in. You rest easy.',
      },
      {
        title: 'Dog Sitting – Full Day',
        time: '24 hours',
        price: '$175',
        notes: 'Sunup to sundown snuggles.',
      },
      {
        title: 'Plant Care – Standard',
        time: '45 minutes',
        price: '$30',
        notes: 'Hydration, rotation, and compliments.',
      },
      {
        title: 'Plant Care – Extended',
        time: '1.5 hours',
        price: '$45',
        notes: 'Bespoke care for your green divas.',
      },
    ],
  },
  {
    name: 'Tech & Admin',
    description: 'Digital peace and inbox clarity. We organize, so you can breathe.',
    anchor: 'tech-admin',
    offerings: [
      {
        title: 'Personal Admin & Clerical Help',
        time: '5 hours',
        price: '$150',
        notes: 'We calendar, click, and sort. You focus.',
      },
    ],
  },
  {
    name: 'Theatre & Ritual',
    description: 'Sacred meets stage. From breathwork to presence coaching, we help you arrive.',
    anchor: 'theatre-ritual',
    offerings: [
      {
        title: 'Voice Coaching – Technique Series',
        time: '5 sessions',
        price: '$250',
        notes: 'Find your voice, claim your space.',
      },
      {
        title: 'Voice Coaching – One-Off',
        time: '1 hour',
        price: '$75',
        notes: 'Prep with poise. Audition or present with presence.',
      },
      {
        title: 'Yoga + Workout – Single Session',
        time: '1 hour',
        price: '$50',
        notes: 'Custom blend. Centered but spicy.',
      },
      {
        title: 'Yoga + Workout – 5-Session Package',
        time: '5 hours',
        price: '$225',
        notes: 'Slow burn. Big shifts. Mat required.',
      },
    ],
  },
];

function Services() {
  return (
    <div className='px-6 py-16 max-w-5xl mx-auto'>
      <Helmet>
        <title>The Crew | Dramatis Services</title>
        <meta
          name='description'
          content='Explore Dramatis lifestyle services — from meal prep to mobile bartending, from laundry to life rituals. Your crew awaits.'
        />
        <link rel='canonical' href='https://dramatis.club/services' />
        <meta property='og:title' content='The Crew | Dramatis Services' />
        <meta
          property='og:description'
          content='Lifestyle services for modern rituals — from light cleaning to charcuterie staging. Browse offerings and book your crew.'
        />
        <meta
          property='og:image'
          content='https://magnolialb.vercel.app/assets/dramatis-og-image.png'
        />
        <meta property='og:url' content='https://dramatis.club/services' />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>

      <h1 className='text-4xl font-display font-bold text-brand-rosewood mb-6 text-center'>
        The Crew
      </h1>
      <p className='text-center italic text-neutral-800 mb-4'>
        This isn’t stagecraft — it’s Lifecraft.
      </p>
      <p className='text-center text-neutral-700 max-w-2xl mx-auto mb-12'>
        Behind every unforgettable moment is a crew making it look effortless — calm, focused, and
        invisibly brilliant. That’s us. From life’s chaos to its quiet victories, we’re your
        backstage dream team — making everyday transformations run smoother than a scene change.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16'>
        {categories.map((cat) => (
          <a
            key={cat.name}
            href={`#${cat.anchor}`}
            className='block p-6 rounded-xl shadow-card bg-white hover:shadow-dramatic transition border border-brand-buttercream'>
            <h2 className='text-xl font-display text-brand-rosewood font-semibold mb-2'>
              {cat.name}
            </h2>
            <p className='text-sm text-neutral-800'>{cat.description}</p>
          </a>
        ))}
      </div>

      <div className='text-center'>
        <a
          href='https://dramatis.acuityscheduling.com'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block px-6 py-3 rounded-xl bg-brand-rosewood text-white font-medium hover:bg-brand-mulberry transition'>
          Reserve Now
        </a>
        <p className='text-xs text-neutral-600 mt-2'>
          Includes 30 min round-trip travel. Additional billed at $10 per 15 min.
        </p>
      </div>

      <div className='mt-24 space-y-20'>
        {categories.map((cat) => (
          <section key={cat.anchor} id={cat.anchor}>
            <h2 className='text-3xl font-display font-semibold text-brand-rosewood mb-4'>
              {cat.name}
            </h2>
            <p className='text-neutral-700 mb-6'>{cat.description}</p>
            <ul className='space-y-4'>
              {cat.offerings?.map((item) => (
                <li key={item.title} className='p-4 rounded-xl bg-white shadow-card'>
                  <h3 className='font-semibold text-lg text-brand-mulberry'>{item.title}</h3>
                  <p className='text-sm text-neutral-800'>
                    <strong>Time:</strong> {item.time} | <strong>Price:</strong> {item.price}
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

export default Services;
