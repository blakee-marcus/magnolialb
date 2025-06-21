import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

const priceMap = {
  ensemble: 'price_1RcBYVIiDoOB9Sd9GSblhwnA',
  'inner-circle': 'price_1RcTqlIiDoOB9Sd9pIDs8TxH',
  lead: 'price_1RcTsBIiDoOB9Sd9QAnsArGd',
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
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/subscribe?subscribed=true`,
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
