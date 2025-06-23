import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

const priceMap = {
  ensemble: 'price_1Rcy6dFZx8xiOBR6QeYvbAYi',
  'inner-circle': 'price_1Rcy8gFZx8xiOBR6pDkANR4K',
  lead: 'price_1RcyDiFZx8xiOBR6wYn8OUR6',
};

export async function POST(req) {
  try {
    const body = await req.json();
    const { tier } = body;

    const priceId = priceMap[tier];
    if (!priceId) {
      return NextResponse.json({ error: 'Invalid membership tier selected.' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      phone_number_collection: {
        enabled: true,
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/thankyou`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/subscribe`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    return NextResponse.json(
      { error: 'Something went wrong creating checkout session.' },
      { status: 500 },
    );
  }
}
