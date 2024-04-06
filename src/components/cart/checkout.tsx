import {useShoppingCart} from "use-shopping-cart";
import {loadStripe} from "@stripe/stripe-js";

export default function CheckoutButton() {
    const {cartCount = 0, cartDetails} = useShoppingCart();

    const redirectToCheckout = async () => {
        try {
            const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

            if (!stripe) throw new Error('Stripe failed to initialize.');

            const checkoutResponse = await fetch('/api/checkout_sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({cartDetails}),
            });

            const {sessionId} = await checkoutResponse.json();
            const stripeError = await stripe.redirectToCheckout({sessionId});

            if (stripeError) {
                console.error(stripeError);
            }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button
            onClick={() => cartCount > 0 && redirectToCheckout()}
            disabled={cartCount === 0}
            className="rounded-md border border-transparent bg-pink-700 px-6 py-3 text-base font-medium text-white shadow-sm mr-2 disabled:opacity-50">
            Checkout
        </button>
    );
}
