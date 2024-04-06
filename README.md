
## Intro
An e-commerce app with shopping cart and payments. 
Technologies used: 
- Next.js
- TypeScript
- Tailwind CSS
- Stripe

## Getting Started

1. Sign up for Stripe account and get Stripe API Keys

2. Install NPM packages
   ```sh
   yarn install
   ```
3. Enter your API keys in `.env.local`
   ```js
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY='ENTER YOUR API KEY'
    STRIPE_SECRET_KEY='ENTER YOUR API KEY'
   ```
## Run the app
```sh
   yarn dev
   ```