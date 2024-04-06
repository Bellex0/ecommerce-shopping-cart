import {NextRequest, NextResponse} from "next/server";
import {headers} from "next/headers";
import {CartItem} from "@/types/type";
import stripe from "@/config/stripe";

export async function POST(req: NextRequest, res: NextResponse) {
    const headersList = headers();
    const {cartDetails} = await req.json();
    const cartDetailsArray: CartItem[] = Object.values(cartDetails) as CartItem[];

    const lineItems = cartDetailsArray.map((item: CartItem) => {
        return {
            price_data: {
                currency: item.currency,
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price,
            },
            quantity: item.quantity,
        };
    });

    try {
         
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            shipping_address_collection:{
                allowed_countries:["US"]
            },
            success_url: `${headersList.get("origin")}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${headersList.get("origin")}/`,
        });

        
        return NextResponse.json({sessionId: session.id});
    } catch (err) {
        console.log("Checkout Route error", err)
        return NextResponse.json({error: "Error creating checkout session"});
    }
}

// export async function GET(req: NextRequest, res: NextResponse) {
//     export async function GET(req, res) {
//     try {
//       // Retrieve the session ID from the query parameters
//     //   const { sessionId } = await req.json();
  
//       // Fetch the session details from Stripe
//     //   const session = await stripe.checkout.sessions.retrieve(sessionId as string);
//         const session = await stripe.checkout.sessions.retrieve(req.query.session_id)
//         console.log(session)
//       // Return the session details as a JSON response
//       return NextResponse.json(session);
//     } catch (error) {
//       // Handle errors
//       console.error('Error fetching session:', error);
//       return NextResponse.json({error: "Error getting checkout session"});
//     }
//   }
// export async function GET(req, res: NextResponse) {
//     try {
//       // Retrieve the session ID from the query parameters
//       const { session_id } = req.query;
//       console.log(session_id)
  
//       // Retrieve the session details from Stripe
//       const session = await stripe.checkout.sessions.retrieve(session_id);
      
  
//       // Construct the response JSON with the customer's name
//     //   const responseData = { 
//     //     name: session.shipping_details?.name
//     //   };
  
//       // Send the response JSON back to the client
//       return NextResponse.json({name: session.shipping_details?.name});
//     } catch (error) {
//       // Handle errors
//       console.error('Error processing order success:', error);
//       return NextResponse.json({ error: 'Error processing order success' });
//     }
//   }

