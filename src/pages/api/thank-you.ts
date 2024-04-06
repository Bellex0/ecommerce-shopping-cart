
// Import the stripe package
import stripe from "@/config/stripe";
import { NextRequest, NextResponse } from 'next/server'


// Define the API route handler
export default async function handler(req, res) {
  try {
    // Retrieve the session ID from the query parameters
    const url = new URL(req.url || '', 'http://localhost');
    console.log(url)
    const sessionId = url.searchParams.get('session_id');

    // Fetch the session details from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId as string);
    console.log(session);

    // Return the session details as a JSON response
    res.status(200).json(session);
  } catch (error) {
    // Handle errors
    console.error('Error fetching session:', error);
    res.status(500).json({ error: "Error getting checkout session" });
  }
}

